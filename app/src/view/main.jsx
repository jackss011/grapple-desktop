// react
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'


// redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from '../redux/reducers/reducer'
import ActionTypes from '../redux/actions/action-types'


// account
import Account from '../model/account'
import accountMiddleware from '../redux/middleware/account-middleware'


// database
import Database from '~/model/database'
import databaseMiddleware from '~/redux/middleware/database-middleware'


//storage
import storageMiddleware from '~/redux/middleware/storage-middleware'


// APPLICATION
const account = new Account()
const database = new Database()

const logger = createLogger({
  predicate: (getState, action) => action.type !== ActionTypes.WINDOW_CLICK
})

const store = createStore(reducer, applyMiddleware(
    thunk,
    accountMiddleware(account),
    databaseMiddleware(database),
    storageMiddleware,
    logger
))

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);
