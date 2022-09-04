import {
  StyleSheet,
  View,
} from "react-native";
import BtnDeletePost from 'components/shared/BtnDeletePost';
import { colors } from 'res/vars.js';

export default Footer = () => {
  return (
    <View style={styles.footer}>
      <BtnDeletePost />
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