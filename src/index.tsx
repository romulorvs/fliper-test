import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './pages/routes'
import configStore from './redux/store'
import { GlobalStyle } from './styles'

const store = configStore()

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
