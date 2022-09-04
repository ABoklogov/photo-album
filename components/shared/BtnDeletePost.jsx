import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import RemoveIcon from 'icons/RemoveIcon';
import { colors } from 'res/vars.js';

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
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 70,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
  },
});
