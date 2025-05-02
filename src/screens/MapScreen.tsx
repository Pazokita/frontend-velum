import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import MapView from "react-native-maps";
import OpacitySlider from "../components/OpacitySlider";
import { useMaps } from "../services/useMaps";

const MapScreen = () => {
  const [opacity, setOpacity] = useState(0.8);
  const { maps, isLoading, error } = useMaps();

  if (isLoading) return <Text>Chargement des cartes…</Text>;
  if (error) return <Text>Impossible de charger les cartes</Text>;
  if (maps.length === 0) return <Text>Aucune carte disponible</Text>;

  const map = maps[0]; // temporairement : on affiche la 1re carte
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.8616, // Centre Paris
          longitude: 2.3419,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
      <Image
        source={{ uri: map.imageUrl }}
        style={[styles.overlay, { opacity }]}
        resizeMode="contain"
      />
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
});

export default MapScreen;
