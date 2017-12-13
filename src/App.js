import React, {
  Fragment
} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Dashboard from './sections/Dashboard'
import Login from './sections/Login'

const App = () => (
  <Router>
    <Fragment>
      <Route
        component={Login}
        exact
        path='/'
      />
      <Route
        component={Dashboard}
        exact
        path='/dashboard'
      />
    </Fragment>
  </Router>
)

export default App
