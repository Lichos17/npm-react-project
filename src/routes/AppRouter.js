import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import { AngularPage } from '../components/AngularPage';
import { ReactPage } from '../components/ReactPage';
import { VuePage } from '../components/VuePage';
import { MainHeader } from '../components/MainHeader'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <MainHeader />
        <Switch>
          <Route exact path="/react" component={ReactPage} />
          <Route exact path="/angular" component={AngularPage} />
          <Route exact path="/vue" component={VuePage} />

          <Redirect to="/angular" />
        </Switch>
      </div>
    </Router>
  )
}
