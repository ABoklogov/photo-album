import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import RemoveIcon from '../icons/RemoveIcon';

export default BtnDeletePost = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
    >
      <RemoveIcon />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 70,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
  },
});
