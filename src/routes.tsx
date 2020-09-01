import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/home/home';
import Login from './Components/login/login';
import NavBar from './Components/Common/NavBar/index';

const routes = (
  <>
    <NavBar />
    <div>
      <Route name='root' exact={true} path='/' component={Home} />
      <Route name='login' exact={true} path='/login' component={Login} />
    </div>
  </>
);
export default routes;
