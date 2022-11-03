import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from 'res/vars.js';

export default BtnReshootPhoto = ({ reshootPhoto }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={reshootPhoto}
    >
      <MaterialCommunityIcons
        name="window-close"
        size={30}
        color={colors.red}
      />
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