import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Router } from './Router';

import './styles/global.scss';

export const App = () => (
  <HashRouter>
    <Router />
  </HashRouter>
);
