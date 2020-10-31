import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/dashboard';
import About from './Components/About/about';
import Features from './Components/Features/features';
import Home from './Components/home/home';
import Login from './Components/Authentication/Login/login';
import NavBar from './Components/Common/NavBar/index';
import ForgotPassword from './Components/Authentication/ForgotPassword/forgotpassword';
import SignUp from './Components/Authentication/SignUp/signup';

const routes = (
  <>
    <NavBar />
    <div>
      <Route name='root' exact={true} path='/' component={Home} />
      <Route name='login' exact={true} path='/login' component={Login} />
      <Route name='dashboard' exact={true} path='/dashboard' component={Dashboard} />
      <Route name='forgotpassword' exact={true} path='/forgot' component={ForgotPassword} />
      <Route name='signup' exact={true} path='/signup' component={SignUp} />
      <Route name='about' exact={true} path='/about' component={About} />
      <Route name='features' exact={true} path='/features' component={Features} />
    </div>
  </>
);
export default routes;
