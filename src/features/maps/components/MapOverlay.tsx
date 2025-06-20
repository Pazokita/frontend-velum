import React from "react";
import { Overlay } from "react-native-maps";

type Props = {
  imageUrl: string;
  bounds: [[number, number], [number, number]];
  opacity: number;
};

const MapOverlay = ({ imageUrl, bounds, opacity }: Props) => {
  return (
    <Overlay image={{ uri: imageUrl }} bounds={bounds} opacity={opacity} />
  );
};

export default MapOverlay;
