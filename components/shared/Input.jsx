import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
} from "react-native";
import { colors, fonts, sizeText } from 'res/vars.js';

export default Input = ({
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
      style={{ ...styles.input, borderColor: isFocus ? colors.green : colors.borderGrey }}
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
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    padding: 15,
    color: colors.black,
    backgroundColor: colors.lightGrey,
  },
});