import {
  StyleSheet,
  Text
} from "react-native";
import { colors, fonts, sizeText } from 'res/vars.js';

export default Message = ({ message }) => {
  return (
    <Text style={styles.message}>{message}</Text>
  )
};

const styles = StyleSheet.create({
  message: {
    fontFamily: fonts.medium,
    fontSize: sizeText.normal,
    lineHeight: 19,
    color: colors.grey,
    padding: 3,
    textAlign: 'center',
  },
});