import { useEffect, useState } from 'react';
import axios from 'axios';

export interface MapMetadata {
  id: number;
  title: string;
  imageUrl: string;
  bbox: [number, number, number, number];
  opacity: number;
}

export const useMaps = () => {
  const [maps, setMaps] = useState<MapMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get<MapMetadata[]>('http://localhost:8080/maps');
        setMaps(response.data);
      } catch (e) {
        console.error('Erreur lors du chargement des cartes :', e);
        setError('Impossible de charger les cartes');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaps();
  }, []);

  return { maps, isLoading, error };
};


export async function fetchMaps(): Promise<MapMetadata[]> {
  try {
    const res = await fetch('http://localhost:8080/maps');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error('Erreur fetchMaps:', error);
    throw new Error('Erreur lors du chargement des cartes');
  }
}