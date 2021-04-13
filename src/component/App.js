import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import Home from './Home'
import Login from './Login'
import Register from './Registration'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './Auth'

export const history = createHistory();

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </AuthProvider>




  )
}

export default App;