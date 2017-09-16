import ActionsGenerator from '../actions/actions-generator'
import ActionTypes from '../actions/action-types'


export default database => {
    return ({dispatch, getState}) => {

        database.onProjects = projects =>
            dispatch(ActionsGenerator.onProjects(projects))

        return next => action => {
            const res = next(action)

            switch(action.type) {
                case ActionTypes.INITIALIZE:
                    database.initialize()
                    break

                case ActionTypes.SUBMIT_PROJECT:
                    let {uid, promise} = database.submitProject(action.name, action.description)
                    promise.then(
                        () => {
                            let project = getState().projects.list[uid]
                            dispatch(ActionsGenerator.submitProjectResult(project, true))
                        },
                        () => {
                            let project = {name: action.name}
                            dispatch(ActionsGenerator.submitProjectResult(project, false))
                        }
                    )
                    dispatch(ActionsGenerator.selectProject(uid))
                    break

                case ActionTypes.DELETE_PROJECT_CONFIRM:
                    if(action.confirmed) {
                        let project = getState().projects.list[action.uid] //TODO check if exists

                        database.deleteProject(action.uid).then(
                            () => dispatch(ActionsGenerator.deleteProjectResult(project, true)),
                            () => dispatch(ActionsGenerator.deleteProjectResult(project, false))
                        )
                    }
                    break
            }

            return res
        }
    }
}
