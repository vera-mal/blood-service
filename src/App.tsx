import React from 'react';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Root } from './pages/root';
import { Header } from './components/Header';
import './App.scss';

export const App = () => (
  <BrowserRouter>
    <Header />
    <div className="layout">
      <Root />
    </div>
  </BrowserRouter>
);
