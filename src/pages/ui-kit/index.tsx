import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Logo } from '../../assets/Logo';
import { Button } from '../../components/ui/Button';
import { DonorTrafficLight } from '../../components/DonorTrafficLight';

export const UiKit: FC = () => (
  <div>
    <Helmet>
      <title>Ui Kit</title>
    </Helmet>

    <Logo />
    <Button text="Button CTA" />
    <DonorTrafficLight />
  </div>
);
