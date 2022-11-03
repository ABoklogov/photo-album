import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { colors } from 'res/vars.js';

export default BtnAddPhoto = ({ addPhoto }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={addPhoto}
    >
      <AntDesign
        name="check"
        size={30}
        color={colors.blue}
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