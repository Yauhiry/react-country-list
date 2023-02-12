import React from 'react';
import { Country } from '../types';
import { CountryItem } from './CountryItem';

interface CountryListProps {
  countryList: Country[];
}

export const CountryList = ({ countryList }: CountryListProps) => {
  return (
    <ul className="list-group">
      {countryList.map((countryItem) => (
        <CountryItem key={countryItem.name} countryItem={countryItem} />
      ))}
    </ul>
  );
};
