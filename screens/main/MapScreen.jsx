import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
} from "react-native";
import MapView from "react-native-maps";
import { colors } from 'res/vars.js';

export default MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.6996924,
          longitude: 39.2054537,
          latitudeDelta: 0.001,
          longitudeDelta: 0.0001,
        }}
      >

      </MapView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center'
  },
  map: {
    flex: 1
  }
});