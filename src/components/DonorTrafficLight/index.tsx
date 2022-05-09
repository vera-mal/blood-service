import React, { FC } from 'react';
import './index.scss';
import classNames from 'classnames';

interface IDonorTrafficLightProps {
  isSmall?: boolean
}

export const DonorTrafficLight: FC<IDonorTrafficLightProps> = ({ isSmall }) => (
  <div className={classNames('dtr', { 'dtr--small': isSmall })}>
    <div className={classNames('dtr__cell', 'dtr__type', { 'dtr__cell--small': isSmall, 'dtr__type--small': isSmall })}>
      O (I)
    </div>
    <div className={classNames('dtr__cell', 'dtr__type', { 'dtr__cell--small': isSmall, 'dtr__type--small': isSmall })}>
      A (II)
    </div>
    <div className={classNames('dtr__cell', 'dtr__type', { 'dtr__cell--small': isSmall, 'dtr__type--small': isSmall })}>
      B (III)
    </div>
    <div className={classNames('dtr__cell', 'dtr__type', { 'dtr__cell--small': isSmall, 'dtr__type--small': isSmall })}>
      AB (IV)
    </div>
    {[...Array(4)].map(() => (
      <>
        <div className={classNames('dtr__cell', 'dtr__rh', 'dtr__cell--red', {
          'dtr__cell--small': isSmall,
          'dtr__rh--small': isSmall,
        })}
        >
          Rh+
        </div>
        <div className={classNames('dtr__cell', 'dtr__rh', 'dtr__cell--green', {
          'dtr__cell--small': isSmall,
          'dtr__rh--small': isSmall,
        })}
        >
          Rh-
        </div>
      </>
    ))}
  </div>
);

DonorTrafficLight.defaultProps = {
  isSmall: false,
};
