import React from 'react';
import './styles/index.scss';
import { Button } from './components/ui/Button';
import { Logo } from './assets/Logo';
import { DonorTrafficLight } from './components/DonorTrafficLight';

export const App = () => (
  <div>
    <Logo />
    <Button text="Button CTA" />
    <DonorTrafficLight />
  </div>
);
