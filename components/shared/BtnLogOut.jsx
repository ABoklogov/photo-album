import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LogOut from '../icons/LogOut';

export default BtnLogOut = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.logOutBtn}
      activeOpacity={0.8}
    // onPress={() => navigation.navigate('Login')}
    >
      <LogOut />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  logOutBtn: {
    position: 'absolute',
    right: 10,
  }
})