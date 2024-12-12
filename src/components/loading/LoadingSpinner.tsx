import React from 'react';
import { Bike as BikeIcon } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <BikeIcon className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-bounce" />
        <p className="text-xl text-gray-600">Chargement des vélos...</p>
      </div>
    </div>
  );
};