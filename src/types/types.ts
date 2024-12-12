export interface BaserowImage {
  url: string;
  thumbnails: {
    tiny: {
      url: string;
      width: number;
      height: number;
    };
    small: {
      url: string;
      width: number;
      height: number;
    };
  };
  name: string;
  size: number;
  mime_type: string;
  is_image: boolean;
  image_width: number;
  image_height: number;
  uploaded_at: string;
}

export interface BaserowBike {
  id: number;
  order: string;
  "Réf.": string;
  "Marque": string;
  "Modèle": string;
  "Prix": string;
  "Année": string;
  "descriptif": string;
  "photos": BaserowImage[];
  "caractéristiques": string;
  "prix number": string;
}

export interface Bike {
  id: number;
  reference: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  description: string;
  specifications: string;
  images: string[];
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: BaserowBike[];
}