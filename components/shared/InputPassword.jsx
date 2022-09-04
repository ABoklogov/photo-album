import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors, fonts, sizeText } from 'res/vars.js';

export default InputPassword = ({
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
        style={{ ...styles.input, borderColor: isFocus ? colors.green : colors.borderGrey }}
        textAlign={'left'}
        secureTextEntry={isHiddenPassword}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
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

const styles = StyleSheet.create({
  inputPassword: {
    position: 'relative',
  },
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
    fontFamily: fonts.medium,
    fontSize: sizeText.normal,
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 19,
    color: colors.blue,
  },
});