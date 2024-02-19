import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from '../App/Store'
import { Provider } from 'react-redux'
import Button from './Button'
ReactDOM.render(
  <Provider store={store}>
    <App />
    <Button></Button>
  </Provider>,
  document.getElementById('root')
)


export default App;
