import ActionTypes from '../actions/action-types'

const initState = {
    projects: null,
    adding: false
}

export default function(state = initState, action) {
    switch(action.type) {
        case ActionTypes.ON_PROJECTS:
            return Object.assign({}, state, {list: action.projects})

        case ActionTypes.ADD_PROJECT:
            return Object.assign({}, state, {adding: true})
        default:
            return state
    }
}