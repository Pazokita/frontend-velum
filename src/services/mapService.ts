export type MapMetadata = {
    id: number;
    title: string;
    imageUrl: string;
    bbox: [number, number, number, number];
    opacity: number;
  };
  
  export async function fetchMaps(): Promise<MapMetadata[]> {
    const res = await fetch('http://localhost:8080/maps');
    if (!res.ok) {
      throw new Error('Erreur lors du chargement des cartes');
    }
    return await res.json();
  }