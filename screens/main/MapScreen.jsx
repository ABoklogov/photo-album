import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const initState = {
  coords: {
    // дефолтные координаты - это Воронеж
    latitude: 51.660781,
    longitude: 39.200296,
  },
  title: '',
};

export default MapScreen = ({ route }) => {
  const [coords, setCoords] = useState(initState.coords);
  const [title, setTitle] = useState(initState.title);

  useEffect(() => {
    // если передали координаты, записываем их в стейт
    if (route.params.coords) {
      setCoords(route.params.coords);
      setTitle(route.params.title)
    };
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
      >
        { // показываем маркер, если передали координаты
          route.params.coords &&
          <Marker coordinate={{
            latitude: coords.latitude,
            longitude: coords.longitude,
          }}
            title={title}
          />
        }
      </MapView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1
  }
});