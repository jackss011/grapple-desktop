import ActionsGenerator from '../actions/actions-generator'
import ActionTypes from '../actions/action-types'


export default database => {
    return ({dispatch}) => {
       


        return next => action => {
            switch(action.type) {
                
            }

            return next(action)
        }
    }
}