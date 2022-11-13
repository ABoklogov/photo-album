import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import MapMarker from 'icons/MapMarker';
import { colors, fonts, sizeText } from 'res/vars.js';

export default PostLocation = ({ location }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Map', location)}
    >
      <View style={styles.container}>
        <View style={styles.marker}>
          <MapMarker />
        </View>
        <Text style={styles.text}>{location.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marker: {
    marginRight: 5,
  },
  text: {
    fontFamily: fonts.medium,
    fontStyle: 'normal',
    fontSize: sizeText.normal,
    lineHeight: 19,
    color: colors.black,
    textDecorationLine: 'underline',
  }
});
