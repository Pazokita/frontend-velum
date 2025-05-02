import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import OpacitySlider from "../components/OpacitySlider";
import { useMaps } from "../services/useMaps";
import { MapPicker } from "../components/MapPicker";
import { MapMetadata } from "../services/mapService";

const MapScreen = () => {
  const [opacity, setOpacity] = useState(0.8);
  const { maps, isLoading, error } = useMaps();

  if (isLoading) return <Text>Chargement des cartes…</Text>;
  if (error) return <Text>Impossible de charger les cartes</Text>;
  if (maps.length === 0) return <Text>Aucune carte disponible</Text>;

  const [selectedMap, setSelectedMap] = useState<MapMetadata>(maps[0]);
  return (
    <View style={styles.container}>
      <Text style={styles.mapTitle}>{selectedMap.title}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.8616,
          longitude: 2.3419,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polygon
          coordinates={[
            { latitude: selectedMap.bbox[1], longitude: selectedMap.bbox[0] },
            { latitude: selectedMap.bbox[3], longitude: selectedMap.bbox[0] },
            { latitude: selectedMap.bbox[3], longitude: selectedMap.bbox[2] },
            { latitude: selectedMap.bbox[1], longitude: selectedMap.bbox[2] },
          ]}
          strokeColor="rgba(255, 255, 0, 0.9)"
          fillColor="rgba(255, 255, 0, 0.2)"
        />
      </MapView>
      <MapPicker maps={maps} onSelect={setSelectedMap} />
      <OpacitySlider value={opacity} onChange={setOpacity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default MapScreen;
