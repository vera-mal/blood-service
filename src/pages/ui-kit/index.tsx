import React, { FC } from 'react';
import { Logo } from '../../assets/Logo';
import { Button } from '../../components/ui/Button';
import { DonorTrafficLight } from '../../components/DonorTrafficLight';

export const UiKit: FC = () => (
  <div>
    <Logo />
    <Button text="Button CTA" />
    <DonorTrafficLight />
  </div>
);
