import {combineReducers} from 'redux'

import userReducer from './userReducer'
import initReducer from './initReducer'
import headerMenuReducer from './headerMenuReducer'
import projectsReducer from './projectsReducer'

export default combineReducers({
    initializing: initReducer,
    user: userReducer,
    headerMenu: headerMenuReducer,
    projects: projectsReducer,
})
