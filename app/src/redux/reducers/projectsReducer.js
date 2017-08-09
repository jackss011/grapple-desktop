import ActionTypes from '../actions/action-types'

export default function(state = {}, action) {
    switch(action.type) {
        case ActionTypes.ON_PROJECTS:
            return action.projects
        default:
            return state
    }
}