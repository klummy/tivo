import React, {
  Fragment
} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Dashboard from './sections/Dashboard'
import Login from './sections/Login'
import { Nav } from './components'

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route
          component={Login}
          exact
          path='/'
        />

        <main>
          <Nav />

          <Route
            component={Dashboard}
            exact
            path='/dashboard'
          />
        </main>
      </Switch>
    </Fragment>
  </Router>
)

export default App
