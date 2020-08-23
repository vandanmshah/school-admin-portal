import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

const ProviderComponent = () => <Router>{routes}</Router>;

export default ProviderComponent;
