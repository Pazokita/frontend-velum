import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

type Props = {
  value: number;
  onChange: (val: number) => void;
};

const OpacitySlider = ({ value, onChange }: Props) => {
  return (
    <View style={styles.sliderContainer}>
      <Slider
        style={{ flex: 1 }}
        minimumValue={0}
        maximumValue={1}
        step={0.01}
        value={value}
        onValueChange={onChange}
        minimumTrackTintColor="#FFD700"
        maximumTrackTintColor="#999999"
        thumbTintColor="#000000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
});

export default OpacitySlider;