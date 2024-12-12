import React from 'react';
import { Bike } from '../../types/types';
import { BikeCard } from '../BikeCard';

interface BikeGridProps {
  bikes: Bike[];
  onViewDetails: (bike: Bike) => void;
}

export const BikeGrid: React.FC<BikeGridProps> = ({ bikes, onViewDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bikes.map((bike) => (
        <BikeCard key={bike.id} bike={bike} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
};
