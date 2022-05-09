import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/Logo';
import { Button } from '../ui/Button';
import './index.scss';

export const Header: FC = () => (
  <header className="header">
    <div className="header__content">
      <Link to="/" className="header__logo"><Logo /></Link>
      <div className="header__links">
        <Link to="/map" className="header__link">Учреждения</Link>
        <div className="header__link">Личный кабинет</div>
        <div className="header__link">Сообщения</div>
      </div>
      <div className="header__auth">
        <div className="header__link">Регистрация</div>
        <Button text="Вход" />
      </div>
    </div>
  </header>
);
