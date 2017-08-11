import ActionsGenerator from '../actions/actions-generator'
import ActionTypes from '../actions/action-types'


export default database => {
    return ({dispatch}) => {
       
        database.onProjects = projects => 
            dispatch(ActionsGenerator.onProjects(projects))

        return next => action => {
            switch(action.type) {
                case ActionTypes.INITIALIZE:
                    database.initialize()
                    break

                case ActionTypes.SUBMIT_PROJECT:
                    database.submitProject(action.name, action.description)
                    break
            }

            return next(action)
        }
    }
}