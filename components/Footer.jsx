import {
  StyleSheet,
  View,
} from "react-native";
import BtnDeletePost from 'components/shared/BtnDeletePost';

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
    backgroundColor: '#fff',
    height: 83,
    width: '100%',
    paddingBottom: 34,
    paddingTop: 9,
  },
});