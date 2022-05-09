import React, { FC } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { list } from '../../mocks/mapPage';
import { IInstitutionBase } from '../../typings/institutions';
import { FilterLines } from '../../assets/icons/FilterLines';
import { MapPin } from '../../components/ui/MapPin';
import { InstitutionTooltip } from '../../components/InstitutionTooltip';

export const MapPage: FC = () => (
  <div className="map-page">
    <div className="map-page__info">
      <h1 className="map-page__header">Карта учреждений</h1>
      <button type="button" className="map-page__filter">
        <FilterLines />
        Сортировка
      </button>
      <ul className="map-page__list">
        {list.map((item : IInstitutionBase) => (
          <li key={item.id} className="map-page__institution">
            <Link to="/" className="map-page__link">{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="map-page__map">
      <MapPin />
      <InstitutionTooltip />
    </div>
  </div>
);
