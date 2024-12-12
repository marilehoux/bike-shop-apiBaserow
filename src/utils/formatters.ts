export const formatPrice = (price: number): string => {
  try {
    return price.toLocaleString('fr-FR', { 
      style: 'currency', 
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } catch (error) {
    console.error('Error formatting price:', error);
    return `${price} €`;
  }
};

export const parsePrice = (price: string): number => {
  try {
    return parseFloat(price.replace(',', '.')) || 0;
  } catch {
    return 0;
  }
};