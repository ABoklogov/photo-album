import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  colors,
  fonts,
  sizeText,
  strings
} from 'res/vars.js';

export default BtnUploadPhoto = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
    >
      <Text style={styles.text}>
        {strings.buttonUploadPhoto}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.medium,
    fontSize: sizeText.normal,
    fontStyle: 'normal',
    lineHeight: 19,
    color: colors.grey,
    width: 150,
    marginHorizontal: 16,
  },
});