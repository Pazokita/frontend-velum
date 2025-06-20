import { useEffect, useState } from 'react';
import axios from 'axios';
import { MapMetadata } from '../types';

export const useMapById = (mapId: number) => {
  const [map, setMap] = useState<MapMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMap = async () => {
      try {
        const response = await axios.get<MapMetadata>(`http://localhost:8080/maps/${mapId}`);
        setMap(response.data);
      } catch (e) {
        console.error('Erreur lors du chargement de la carte :', e);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMap();
  }, [mapId]);

  return { map, isLoading, error };
};