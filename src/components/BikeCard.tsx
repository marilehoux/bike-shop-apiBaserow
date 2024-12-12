import React from 'react';
import { Bike } from '../types/types';
import { ArrowRight } from 'lucide-react';
import { formatPrice } from '../utils/formatters';
import { DEFAULT_BIKE_IMAGE } from '../utils/constants';

interface BikeCardProps {
  bike: Bike;
  onViewDetails: (bike: Bike) => void;
}

export const BikeCard: React.FC<BikeCardProps> = ({ bike, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={bike.images[0] || DEFAULT_BIKE_IMAGE}
          alt={bike.model}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.currentTarget.src = DEFAULT_BIKE_IMAGE;
          }}
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {bike.brand} {bike.model || 'Vélo'}
        </h2>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold text-blue-600">
            {formatPrice(bike.price)}
          </span>
          <span className="text-gray-600">Année: {bike.year}</span>
        </div>
        <p className="text-gray-600 mb-4">Réf: {bike.reference}</p>
        <button
          onClick={() => onViewDetails(bike)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          Voir les détails
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};