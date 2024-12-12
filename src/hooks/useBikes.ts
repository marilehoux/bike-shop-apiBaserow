import { useState, useEffect } from 'react';
import { Bike } from '../types/types';
import { fetchBikes } from '../api/baserow';

export const useBikes = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBikes = async () => {
      try {
        const data = await fetchBikes();
        setBikes(data);
      } catch (err) {
        setError('Erreur lors du chargement des vélos');
      } finally {
        setLoading(false);
      }
    };

    loadBikes();
  }, []);

  return { bikes, loading, error };
};