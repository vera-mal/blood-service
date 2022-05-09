import React, { FC } from 'react';
import './index.scss';
import { DonorTrafficLight } from '../DonorTrafficLight';

export const InstitutionTooltip: FC = () => (
  <div className="institution-tooltip">
    <span className="institution-tooltip__header">Военно-медицинская академия им. С.М. Кирова, отделение переливания крови</span>
    <span className="institution-tooltip__info institution-tooltip__address">Загородный проспект, д. 47</span>
    <span className="institution-tooltip__info institution-tooltip__time">пн-пт 09:00-13:00</span>
    <DonorTrafficLight isSmall />
  </div>
);
