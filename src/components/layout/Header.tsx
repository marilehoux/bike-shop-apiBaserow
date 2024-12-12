import React from 'react';
import { Bike as BikeIcon } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <BikeIcon className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Bike Shop</h1>
        </div>
      </div>
    </header>
  );
};