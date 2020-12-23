import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { AuthRoutes } from './auth.routes';
import { HomeRoutes } from './home.routes';

function RoutesApp() {
  const Routes = [...HomeRoutes, ...AuthRoutes];

  return (
    <div>
      <Router>
        <Switch>
          {Routes.map((item) => (
            <Route
              key={String(item)}
              path={item.path}
              component={item.component}
              exact
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default RoutesApp;
