import { ApiResponse, BaserowBike, Bike } from '../types/types';
import { API_CONFIG } from '../utils/constants';
import { parsePrice } from '../utils/formatters';

const transformBikeData = (data: BaserowBike): Bike => {
  return {
    id: data.id,
    reference: data["Réf."] || '',
    brand: data["Marque"] || '',
    model: data["Modèle"] || '',
    price: parsePrice(data["prix number"]),
    year: parseInt(data["Année"], 10) || new Date().getFullYear(),
    description: data["descriptif"] || '',
    specifications: data["caractéristiques"] || '',
    images: data.photos?.map(photo => photo.url) || []
  };
};

export const fetchBikes = async (): Promise<Bike[]> => {
  try {
    const response = await fetch(API_CONFIG.BASE_URL, {
      headers: {
        'Authorization': `Token ${API_CONFIG.TOKEN}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch bikes');
    }
    
    const data: ApiResponse = await response.json();
    return data.results.map(transformBikeData);
  } catch (error) {
    console.error('Error fetching bikes:', error);
    throw error;
  }
};