import ActionTypes from '../actions/action-types'

const initState = {
    initial_loading: true,
    selected: null,
    is_selecting: false,
    adding: false,
    deleting: null,
    snackbar: null,
}

export default function(state = initState, action) {
    switch(action.type) {
        case ActionTypes.ON_PROJECTS:
            let newState = Object.assign({}, state, {
                list: action.projects,
                initial_loading: false
            })

            if(state.selected != null) {
                if(action.projects == null || !action.projects.hasOwnProperty(state.selected))
                    Object.assign(newState, {selected: null})
            }

            return newState


        case ActionTypes.ADD_PROJECT:
            return Object.assign({}, state, {adding: true})

        case ActionTypes.CANCEL_ADD_PROJECT:
            return Object.assign({}, state, {adding: false})

        case ActionTypes.SUBMIT_PROJECT:
            return Object.assign({}, state, {adding: false})

        case ActionTypes.SUBMIT_PROJECT_RESULT:
            let snackbar = {type: 'add', uid: action.uid, success: action.success}
            return Object.assign({}, state, {snackbar})


        case ActionTypes.DELETE_PROJECT:
            return Object.assign({}, state, {deleting: action.uid})

        case ActionTypes.DELETE_PROJECT_CONFIRM:
            return Object.assign({}, state, {deleting: null})


        case ActionTypes.SELECT_PROJECT:
            return Object.assign({}, state, {selected: action.uid, is_selecting: false})


        case ActionTypes.SHOW_PROJECT_SELECTION:
            return Object.assign({}, state, {is_selecting: true})

        case ActionTypes.HIDE_PROJECT_SELECTION:
            return Object.assign({}, state, {is_selecting: false})


        case ActionTypes.AUTH_STATE_CHANGED:
            if(action.userInfo == null)
                return initState

        case ActionTypes.HIDE_PROJECT_SNACKBAR:
            return Object.assign({}, state, {snackbar: null})

        default:
            return state
    }
}
