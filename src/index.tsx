import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { createStore, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import reducer, { IRootState } from './store'
// import * as serviceWorker from './serviceWorker';

const store: Store<IRootState> = createStore(
  reducer,
  applyMiddleware(promise)
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
