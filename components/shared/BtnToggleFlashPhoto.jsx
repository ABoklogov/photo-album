import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from 'res/vars.js';

export default BtnToggleFlashPhoto = ({ toggleFlash, flash }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={toggleFlash}
    >
      <Ionicons
        name="flash"
        size={25}
        color={flash === 'off' ? colors.grey : colors.green}
      />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: colors.transparent,
    borderRadius: 40 / 2,
  },
});