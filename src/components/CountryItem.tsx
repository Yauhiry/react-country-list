import React from 'react';
import { Color } from '../ui/colors';
import { Country } from '../types';
import { Badge } from './Badge';

interface CountryProps {
  country: Country;
}

export const CountryItem = ({
  country: { flagImage, name, capital, region, area, population },
}: CountryProps) => {
  return (
    <li className="list-group-item">
      <div className="row d-flex align-items-center">
        <img className="col-1" src={flagImage} alt={name} />
        <p className="col-3 fw-semibold mb-0">{name}</p>
        <p className="col-2 fw-semibold mb-0">{capital}</p>
        <p className="col-2 fw-semibold mb-0">{region}</p>
        <Badge color={Color.PRIMARY} value={area} label="area" />
        <Badge color={Color.SECONDARY} value={population} label="population" />
      </div>
    </li>
  );
};
