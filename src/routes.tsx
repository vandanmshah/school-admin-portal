import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/home/home';
import Login from './Components/login/login';

const routes = (
  <Switch>
    <Route path='/login'>
      <Login />
    </Route>
    <Route path='/'>
      <Home />
    </Route>
  </Switch>
);
export default routes;
