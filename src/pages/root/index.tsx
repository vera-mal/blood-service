import React, { FC } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { UiKit } from '../ui-kit';

export const Root: FC = () => (
  <Routes>
    <Route path="/ui-kit" element={<UiKit />} />
  </Routes>
);
