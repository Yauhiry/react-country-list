import React from 'react';
import { BadgeLabel } from '../types';
import { Color } from '../ui/colors';

interface BadgeProps {
  color: Color;
  value: number;
  label: BadgeLabel;
}

export const Badge = ({ color, value, label }: BadgeProps) => {
  return (
    <div className="col-2">
      <span className={`badge d-block py-2 text-bg-${color}`}>
        {label}: {value}
      </span>
    </div>
  );
};
