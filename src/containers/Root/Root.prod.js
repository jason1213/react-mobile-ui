import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import App from '../App'
import Home from '../Home'

const Root = ({ store }) => (
  <Provider store={store}>
    <Route path="/" component={App} />
    <Route path="/home" component={Home} />
    {/* add components here */}
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root
