import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import { createStore } from 'redux'
import monitorApp from './reducers'

let store = createStore(monitorApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)