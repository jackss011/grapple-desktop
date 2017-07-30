import ActionTypes from './action-types'

const ActionsGenerator = {
    signIn: () => ({type: ActionTypes.SIGN_IN}),

    signOut: () => ({ type: ActionTypes.SIGN_OUT }),

    authStateChanged: userInfo => ({
        type: ActionTypes.AUTH_STATE_CHANGED,
        userInfo //TODO maybe change to user
    }),

    initialize: () => ({type: ActionTypes.INITIALIZE}),

    windowClicked: () => ({type: ActionTypes.WINDOW_CLICK}),

    showHeaderMenu: () => ({type: ActionTypes.HEADER_MENU_SHOW})
}

export default ActionsGenerator
