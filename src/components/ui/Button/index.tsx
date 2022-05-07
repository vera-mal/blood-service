import React, { FC } from 'react';
import './index.scss';

interface IButton {
  text: string;
}

export const Button: FC<IButton> = ({ text }) => (
  <button className="button-custom" type="button">
    {text}
  </button>
);
