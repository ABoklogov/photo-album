import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
} from "react-native";

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
      style={{ ...styles.input, borderColor: isFocus ? '#56C330' : '#E8E8E8' }}
      textAlign={'left'}
      placeholder={placeholder}
      onFocus={chengeFocusInput}
      onBlur={() => setIsFocus(false)}
      value={stateKey}
      onChangeText={(value) => onChange(value)}
    />
  )
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    padding: 15,
    color: '#212121',
    backgroundColor: '#F6F6F6',
  },
});