import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import OpacitySlider from '../components/OpacitySlider';

const MapScreen = () => {
  const [opacity, setOpacity] = useState(0.8);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.8616,      // Centre Paris
          longitude: 2.3419,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
      <Image
        source={{ uri: 'https://example.com/paris-1750.png' }}
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
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;