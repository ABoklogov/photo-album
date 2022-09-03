import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
} from "react-native";

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
      style={{ ...styles.input, borderBottomColor: isFocus ? '#56C330' : '#E8E8E8' }}
      textAlign={'left'}
      placeholder={placeholder}
      placeholderTextColor={'#BDBDBD'}
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
    lineHeight: 19,
    borderWidth: 1,
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderTopColor: '#fff',
    height: 50,
    paddingTop: 15,
    paddingBottom: 15,
    color: '#212121',
    backgroundColor: '#fff',
  },
});