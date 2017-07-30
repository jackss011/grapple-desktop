import ActionTypes from '../actions/action-types'

export default function(state = false, action) {
    switch (action.type) {
        case ActionTypes.INITIALIZE:
            return true
        case ActionTypes.AUTH_STATE_CHANGED:
            return false
        default:
            return state
    }
}
