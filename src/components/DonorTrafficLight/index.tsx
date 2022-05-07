import React, { FC } from 'react';
import './index.scss';

export const DonorTrafficLight: FC = () => (
  <div className="dtr">
    <div className="dtr__cell dtr__type">O (I)</div>
    <div className="dtr__cell dtr__type">A (II)</div>
    <div className="dtr__cell dtr__type">B (III)</div>
    <div className="dtr__cell dtr__type">AB (IV)</div>
    {[...Array(4)].map(() => (
      <>
        <div className="dtr__cell dtr__cell--red dtr__rh">Rh+</div>
        <div className="dtr__cell dtr__cell--green dtr__rh">Rh-</div>
      </>
    ))}
  </div>
);
