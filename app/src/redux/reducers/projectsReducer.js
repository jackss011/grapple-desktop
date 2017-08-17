import ActionTypes from '../actions/action-types'

const initState = {
    projects: null,
    adding: false,
    initial_loading: true,
    selected: null,
    is_selecting: false
}

export default function(state = initState, action) {
    switch(action.type) {
        case ActionTypes.ON_PROJECTS:
            return Object.assign({}, state, {
                list: action.projects,
                initial_loading: false
            })

        case ActionTypes.ADD_PROJECT:
            return Object.assign({}, state, {adding: true})

        case ActionTypes.CANCEL_ADD_PROJECT:
            return Object.assign({}, state, {adding: false})

        case ActionTypes.SUBMIT_PROJECT:
            return Object.assign({}, state, {adding: false})
        
        case ActionTypes.SELECT_PROJECT:
            return Object.assign({}, state, {selected: action.uid})

        case ActionTypes.SHOW_PROJECT_SELECTION:
            return Object.assign({}, state, {is_selecting: true})

        case ActionTypes.HIDE_PROJECT_SELECTION:
            return Object.assign({}, state, {is_selecting: false})

        case ActionTypes.AUTH_STATE_CHANGED:
            if(action.userInfo == null)
                return initState

        default:
            return state
    }
}