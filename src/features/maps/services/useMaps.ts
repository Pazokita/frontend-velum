import { useEffect, useState } from 'react';
import axios from 'axios';
import { MapMetadata } from '../types'; 

export const useMaps = () => {
  const [maps, setMaps] = useState<MapMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await axios.get<MapMetadata[]>('http://localhost:8080/maps');
        setMaps(response.data);
      } catch (e) {
        console.error('Erreur lors du chargement des cartes :', e);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaps();
  }, []);

  return { maps, isLoading, error };
};