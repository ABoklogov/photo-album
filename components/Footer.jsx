import {
  StyleSheet,
  View,
} from "react-native";
import BtnDeletePost from './shared/BtnDeletePost';

export default Footer = () => {
  return (
    <View
      style={styles.footer}
    >
      <BtnDeletePost />
    </View>
  )
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 83,
    width: '100%',
    paddingBottom: 34,
    paddingTop: 9,
    marginTop: 'auto',
  },
});