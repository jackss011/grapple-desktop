import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import reducer from '../redux/reducers/reducer'

import Account from '../model/account'
import accountMiddleware from '../redux/middleware/account-middleware'
let account = new Account()

const store = createStore(reducer, applyMiddleware(accountMiddleware(account), logger))

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);
