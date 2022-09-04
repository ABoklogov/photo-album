import {
  StyleSheet,
  Text,
} from "react-native";
import { colors, fonts, sizeText } from 'res/vars.js';

export default Title = ({ title }) => {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  )
};

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.bold,
    fontSize: sizeText.big,
    fontStyle: 'normal',
    textAlign: 'center',
    color: colors.black,
  },
});