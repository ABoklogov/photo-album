import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const InputPassword = ({ placeholder, opensKeyboard }) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);

  return (
    <View style={styles.inputPassword}>
      <TextInput
        style={styles.input}
        textAlign={'left'}
        secureTextEntry={isHiddenPassword}
        placeholder={placeholder}
        onFocus={opensKeyboard}
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
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
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
    fontSize: 16,
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 19,
    color: '#0097ff',
  },
});