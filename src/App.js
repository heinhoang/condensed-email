import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Redirect exact from='/' to='/dashboard' />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
