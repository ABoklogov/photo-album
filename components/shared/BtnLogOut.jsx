import { TouchableOpacity } from "react-native";
import { useDispatch } from 'react-redux';
import { signOutUser } from 'store/user/userOperations'
import LogOut from 'icons/LogOut';

export default BtnLogOut = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => dispatch(signOutUser())}
    >
      <LogOut />
    </TouchableOpacity>
  )
};