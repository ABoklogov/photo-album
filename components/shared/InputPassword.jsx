import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const InputPassword = ({
  placeholder,
  opensKeyboard,
  stateKey,
  onChange
}) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  const chengeFocusInput = () => {
    setIsFocus(true);
    opensKeyboard();
  };

  return (
    <View style={styles.inputPassword}>
      <TextInput
        style={{ ...styles.input, borderColor: isFocus ? '#56C330' : '#E8E8E8' }}
        textAlign={'left'}
        secureTextEntry={isHiddenPassword}
        placeholder={placeholder}
        onFocus={chengeFocusInput}
        onBlur={() => setIsFocus(false)}
        value={stateKey}
        onChangeText={(value) => onChange(value)}
      />
      <TouchableOpacity
        style={{ ...styles.inputPasswordBtn, marginBottom: 16 }}
        activeOpacity={0.8}
        onPress={() => setIsHiddenPassword(!isHiddenPassword)}
      >
        <Text style={styles.inputPasswordBtnText}>
          {isHiddenPassword ? 'Показать' : 'Скрыть'}
        </Text>
      </TouchableOpacity>
    </View>
  )
};

export default InputPassword;

const styles = StyleSheet.create({
  inputPassword: {
    position: 'relative',
  },
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
  inputPasswordBtn: {
    position: 'absolute',
    top: '50%',
    right: 16,
    transform: [
      { translateX: 0 },
      { translateY: -10 },
    ]
  },
  inputPasswordBtnText: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 16,
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 19,
    color: '#0097ff',
  },
});