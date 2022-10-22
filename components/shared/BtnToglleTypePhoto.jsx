import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from 'res/vars.js';

export default BtnToglleTypePhoto = ({ toggleCamera }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={toggleCamera}
    >
      <Ionicons
        name="sync-sharp"
        size={29}
        color={colors.grey}
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
