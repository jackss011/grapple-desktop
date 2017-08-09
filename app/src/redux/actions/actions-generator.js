import ActionTypes from './action-types'

const ActionsGenerator = {
    // MISC
    initialize: () => ({type: ActionTypes.INITIALIZE}),

    windowClicked: () => ({type: ActionTypes.WINDOW_CLICK}),

    showHeaderMenu: () => ({type: ActionTypes.HEADER_MENU_SHOW}),


    // AUTH
    signIn: () => ({type: ActionTypes.SIGN_IN}),

    signOut: () => ({ type: ActionTypes.SIGN_OUT }),

    authStateChanged: userInfo => ({
        type: ActionTypes.AUTH_STATE_CHANGED,
        userInfo //TODO maybe change to user
    }),


    // PROJECTS
    addProject: (name, description) => ({
        type: ActionTypes.ADD_PROJECT,
        name, description
    }),

    onProjects: projects => ({
        type: ActionTypes.ON_PROJECTS,
        projects
    })
}

export default ActionsGenerator
