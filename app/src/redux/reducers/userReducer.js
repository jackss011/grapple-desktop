import ActionTypes from '../actions/action-types'

export default function userReducer(state = null, action) {
    switch (action.type) {
        case ActionTypes.AUTH_STATE_CHANGED:
            return action.userInfo
        default:
            return state
    }
}
