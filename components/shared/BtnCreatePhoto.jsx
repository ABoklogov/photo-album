import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Camera from 'icons/Camera';
import { colors } from 'res/vars.js';

export default BtnCreatePhoto = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
    >
      <Camera />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: colors.transparent,
    borderRadius: 60 / 2,
  },
});