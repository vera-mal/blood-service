import React, { FC } from 'react';
import { DonorTrafficLight } from '../../components/DonorTrafficLight';

export const UiKit: FC = () => (
  <div>
    <DonorTrafficLight />
    <DonorTrafficLight isSmall />
  </div>
);
