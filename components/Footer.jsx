import {
  StyleSheet,
  View,
} from "react-native";
import { colors } from 'res/vars.js';

export default Footer = ({ children }) => {
  return (
    <View style={styles.footer}>
      {children}
    </View>
  )
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 83,
    width: '100%',
    paddingBottom: 34,
    paddingTop: 9,
  },
});