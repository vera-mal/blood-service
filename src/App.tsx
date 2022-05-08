import React from 'react';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Root } from './pages/root';

export const App = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
