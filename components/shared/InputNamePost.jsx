import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
} from "react-native";
import { colors, fonts, sizeText } from 'res/vars.js';

export default InputNamePost = ({
  placeholder,
  opensKeyboard,
  stateKey,
  onChange
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const chengeFocusInput = () => {
    setIsFocus(true);
    opensKeyboard();
  };

  return (
    <TextInput
      style={{ ...styles.input, borderBottomColor: isFocus ? colors.green : colors.borderGrey }}
      textAlign={'left'}
      placeholder={placeholder}
      placeholderTextColor={colors.grey}
      onFocus={chengeFocusInput}
      onBlur={() => setIsFocus(false)}
      value={stateKey}
      onChangeText={(value) => onChange(value)}
    />
  )
};

const styles = StyleSheet.create({
  input: {
    fontFamily: fonts.medium,
    fontSize: sizeText.normal,
    lineHeight: 19,
    borderWidth: 1,
    borderLeftColor: colors.white,
    borderRightColor: colors.white,
    borderTopColor: colors.white,
    height: 50,
    paddingTop: 15,
    paddingBottom: 15,
    color: colors.black,
    backgroundColor: colors.white,
  },
});