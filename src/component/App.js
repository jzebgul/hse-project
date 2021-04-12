import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import Home from './Home'
import Login from './Login'
import Register from './Registration'
import Dashboard from './Dashboard'


export const history = createHistory();

const App = () => {
  return (

    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>



  )
}

export default App;