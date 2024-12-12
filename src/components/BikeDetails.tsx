import React, { useState } from 'react';
import { Bike } from '../types/types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { formatPrice } from '../utils/formatters';
import { DEFAULT_BIKE_IMAGE } from '../utils/constants';

interface BikeDetailsProps {
  bike: Bike;
  onClose: () => void;
}

export const BikeDetails: React.FC<BikeDetailsProps> = ({ bike, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === (bike.images.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? (bike.images.length || 1) - 1 : prev - 1
    );
  };

  const images = bike.images.length ? bike.images : [DEFAULT_BIKE_IMAGE];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-gray-800">
              {bike.brand} {bike.model || 'Vélo'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          <div className="relative mb-6">
            <img
              src={images[currentImageIndex]}
              alt={`${bike.model} - Image ${currentImageIndex + 1}`}
              className="w-full h-96 object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.src = DEFAULT_BIKE_IMAGE;
              }}
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Description</h3>
              <p className="text-gray-600">{bike.description || 'Aucune description disponible'}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Caractéristiques techniques</h3>
              <p className="text-gray-600">{bike.specifications || 'Aucune spécification disponible'}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">
              {formatPrice(bike.price)}
            </div>
            <div className="text-gray-600">
              Référence: {bike.reference || 'N/A'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};