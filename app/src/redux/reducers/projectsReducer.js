import ActionTypes from '../actions/action-types'

const initState = {
    projects: null,
    adding: false,
    initial_loading: true
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

        case ActionTypes.AUTH_STATE_CHANGED:
            if(action.userInfo == null)
                return initState

        default:
            return state
    }
}