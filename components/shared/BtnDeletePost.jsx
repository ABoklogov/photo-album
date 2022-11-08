import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import RemoveIcon from 'icons/RemoveIcon';
import { colors } from 'res/vars.js';

export default BtnDeletePost = ({ dataIsFilled, removeState }) => {
  const removeForm = () => {
    if (!dataIsFilled) {
      return
    } else {
      removeState();
    };
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        borderColor: dataIsFilled ? colors.grey : colors.lightGrey
      }}
      onPress={removeForm}
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
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
  },
});
