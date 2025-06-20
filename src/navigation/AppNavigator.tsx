import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import MapListScreen from "../features/maps/screens/MapScreen";
import MapDetailScreen from "../features/maps/screens/MapDetailScreen";

export type RootStackParamList = {
  MapList: undefined;
  MapDetail: { mapId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MapList">
        <Stack.Screen
          name="MapList"
          component={MapListScreen}
          options={{ title: "Cartes historiques" }}
        />
        <Stack.Screen
          name="MapDetail"
          component={MapDetailScreen}
          options={{ title: "Détail de la carte" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
