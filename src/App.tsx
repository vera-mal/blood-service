import React from 'react';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Root } from './pages/root';
import { Header } from './components/Header';
import './App.scss';

export const App = () => (
  <BrowserRouter>
    <Helmet>
      <title>Служба крови</title>
    </Helmet>

    <Header />
    <div className="layout">
      <Root />
    </div>
  </BrowserRouter>
);
