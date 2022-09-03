import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Camera from 'icons/Camera';

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
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 60 / 2,
  },
});