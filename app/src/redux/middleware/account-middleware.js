import ActionsGenerator from '../actions/actions-generator'
import ActionTypes from '../actions/action-types'

// middleware responsible for handling account operations
export default account => {
    return ({dispatch}) => {
        // dispatch an action every time the auth state changes
        account.onAuthStateChanged = user => {
            dispatch(ActionsGenerator.authStateChanged(user))
        }

        return next => action => {
            switch(action.type) {
                case ActionTypes.INITIALIZE:
                    account.initialize()
                    break
                case ActionTypes.SIGN_IN:
                    account.showLoginPopup()
                    break
                case ActionTypes.SIGN_OUT:
                    account.signOut()
                    break
            }

            return next(action)
        }
    }
}
