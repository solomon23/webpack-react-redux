import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store/configureStore'
import Root from './containers/Root'

delete AppContainer.prototype.unstable_handleError

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NewRoot = require('./containers/Root').default
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root'),
    )
  })
}
