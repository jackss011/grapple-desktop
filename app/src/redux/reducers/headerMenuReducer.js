import ActionTypes from '../actions/action-types'

export default function(state = false, action) {
    switch (action.type) {
        case ActionTypes.HEADER_MENU_SHOW:
            return !state
        case ActionTypes.WINDOW_CLICK:
        case ActionTypes.SIGN_OUT:
            return false
            
    
        default:
            return state
    }
}