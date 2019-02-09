import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'
import Timer from './components/timer'

const renderApp = NextApp => {
  render(
    <AppContainer>
      <Timer />
    </AppContainer>,
    document.getElementById('app')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
