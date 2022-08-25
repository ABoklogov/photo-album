import {
  TouchableOpacity,
} from "react-native";
import LogOut from '../icons/LogOut';

export default BtnLogOut = ({ navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
    // onPress={() => navigation.navigate('Login')}
    >
      <LogOut />
    </TouchableOpacity>
  )
};