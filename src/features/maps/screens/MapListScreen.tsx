import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMaps } from "../services/useMaps";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/AppNavigator";
import { MapMetadata } from "../services/mapService";

const MapListScreen = () => {
  const { maps, isLoading, error } = useMaps();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSelect = (map: MapMetadata) => {
    navigation.navigate("MapDetail", { mapId: map.id });
  };

  if (isLoading) return <Text style={styles.text}>Chargement des cartes…</Text>;
  if (error)
    return (
      <Text style={styles.text}>Erreur lors du chargement des cartes</Text>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cartes disponibles :</Text>
      <FlatList
        data={maps}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelect(item)}
            style={styles.item}
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MapListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemText: { fontSize: 16 },
  text: { padding: 20 },
});
