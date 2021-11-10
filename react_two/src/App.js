import React, { Component, Suspense, lazy } from 'react';
import { withRouter, NavLink, Switch, Redirect, Route } from 'react-router-dom';
// const Home = lazy(() => import('./Views/Home'));
import Home from './Views/Home'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Suspense>
      </React.Fragment>
    )
  }
}

export default App;
