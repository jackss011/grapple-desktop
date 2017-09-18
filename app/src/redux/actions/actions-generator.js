import ActionTypes from './action-types'
import {Timer} from '~/model/utils'

let projectSnackbarTimer = new Timer()

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
    addProject: () => ({ type: ActionTypes.ADD_PROJECT }),

    cancelAddProject: () => ({ type: ActionTypes.CANCEL_ADD_PROJECT }),

    submitProject: (name, description) => ({
        type: ActionTypes.SUBMIT_PROJECT,
        name, description
    }),

    submitProjectResult: (project, success) => dispatch => {
        projectSnackbarTimer.set(() => dispatch(ActionsGenerator.hideProjectSnackbar()), 3000)

        dispatch({
            type: ActionTypes.SUBMIT_PROJECT_RESULT,
            project, success
        })
    },


    deleteProjectConfirm: (confirmed, uid) => ({
        type: ActionTypes.DELETE_PROJECT_CONFIRM,
        confirmed, uid
    }),

    deleteProject: uid => ({
        type: ActionTypes.DELETE_PROJECT,
        uid
    }),

    deleteProjectResult: (project, success) => dispatch => {
        projectSnackbarTimer.set(() => dispatch(ActionsGenerator.hideProjectSnackbar()), 3000)

        dispatch({
            type: ActionTypes.DELETE_PROJECT_RESULT,
            project, success
        })
    },


    onProjects: projects => ({
        type: ActionTypes.ON_PROJECTS,
        projects
    }),

    selectProject: uid => ({
        type: ActionTypes.SELECT_PROJECT,
        uid
    }),

    showProjectSelection: () => ({ type: ActionTypes.SHOW_PROJECT_SELECTION }),

    hideProjectSelection: () => ({ type: ActionTypes.HIDE_PROJECT_SELECTION }),


    hideProjectSnackbar: () => {
        projectSnackbarTimer.clear()
        return { type: ActionTypes.HIDE_PROJECT_SNACKBAR }
    }
}

export default ActionsGenerator
