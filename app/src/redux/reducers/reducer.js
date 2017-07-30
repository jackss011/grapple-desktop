import {combineReducers} from 'redux'

import userReducer from './userReducer'
import initReducer from './initReducer'
import headerMenuReducer from './headerMenuReducer'

export default combineReducers({
    user: userReducer,
    initializing: initReducer,
    headerMenu: headerMenuReducer
})
