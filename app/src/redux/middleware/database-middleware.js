import ActionsGenerator from '../actions/actions-generator'
import ActionTypes from '../actions/action-types'


export default database => {
    return ({dispatch}) => {
       
        database.onProjects = projects => 
            dispatch(ActionsGenerator.onProjects(projects))

        return next => action => {
            const res = next(action)

            switch(action.type) {
                case ActionTypes.INITIALIZE:
                    database.initialize()
                    break

                case ActionTypes.SUBMIT_PROJECT:
                    database.submitProject(action.name, action.description)
                    break

                case ActionTypes.DELETE_PROJECT:
                    database.deleteProject(action.uid)
                    break
            }

            return res
        }
    }
}