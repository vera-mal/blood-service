import React, { FC } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { UiKit } from '../ui-kit';
import { Main } from '../main';
import { MapPage } from '../map';

export const Root: FC = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/map" element={<MapPage />} />
    <Route path="/ui-kit" element={<UiKit />} />
  </Routes>
);
