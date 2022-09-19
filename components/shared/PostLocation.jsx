import {
  StyleSheet,
  View,
  Text
} from "react-native";
import MapMarker from 'icons/MapMarker';
import { colors, fonts, sizeText } from 'res/vars.js';

export default PostLocation = ({ location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.marker}>
        <MapMarker />
      </View>
      <Text style={styles.text}>{location}</Text>
    </View>
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
