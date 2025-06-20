import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { useMapById } from "../services/useMapById";
import OpacitySlider from "../components/OpacitySlider";
import MapOverlay from "../components/MapOverlay";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/AppNavigator";

const MapDetailScreen = () => {
  const [opacity, setOpacity] = useState(0.8);
  const route = useRoute<RouteProp<RootStackParamList, "MapDetail">>();
  const { mapId } = route.params;
  const { map, isLoading, error } = useMapById(mapId);

  if (isLoading)
    return <Text style={styles.loading}>Chargement de la carte…</Text>;
  if (error || !map)
    return <Text style={styles.loading}>Erreur lors du chargement</Text>;

  const [south, west, north, east] = map.bbox;

  return (
    <View style={styles.container}>
      <Text style={styles.mapTitle}>{map.title}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (south + north) / 2,
          longitude: (west + east) / 2,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <MapOverlay
          imageUrl={map.imageUrl}
          bounds={[
            [south, west],
            [north, east],
          ]}
          opacity={opacity}
        />
      </MapView>
      <OpacitySlider value={opacity} onChange={setOpacity} />
    </View>
  );
};

export default MapDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 10,
  },
  loading: {
    flex: 1,
    textAlign: "center",
    padding: 20,
  },
});
