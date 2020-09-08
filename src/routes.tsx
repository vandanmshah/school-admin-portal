import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/dashboard';
import Home from './Components/home/home';
import Login from './Components/Authentication/Login/login';
import NavBar from './Components/Common/NavBar/index';
import ForgotPassword from './Components/Authentication/ForgotPassword/forgotpassword';

const routes = (
  <>
    <NavBar />
    <div>
      <Route name='root' exact={true} path='/' component={Home} />
      <Route name='login' exact={true} path='/login' component={Login} />
      <Route name='login' exact={true} path='/dashboard' component={Dashboard} />
      <Route name='forgotpassword' exact={true} path='/forgot' component={ForgotPassword} />
    </div>
  </>
);
export default routes;
