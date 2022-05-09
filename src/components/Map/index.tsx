/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { FC, useEffect } from 'react';
import './index.scss';

export const Map: FC = () => {
  useEffect(() => {
    let map;
    DG.then(() => {
      map = DG.map('map', {
        center: [54.98, 82.89],
        zoom: 13,
      });
    });
  }, []);

  return <div className="map" id="map"> </div>;
};
