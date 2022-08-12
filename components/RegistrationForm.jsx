import { useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Avatar from './Avatar';
import Button from './shared/Button';

const initialState = {
  login: '',
  email: '',
  password: '',
};

const RegistrationForm = ({ opensKeyboard }) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const [state, setstate] = useState(initialState);

  return (
    <View style={styles.containerForm}>
      <Avatar />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text style={{ ...styles.title, marginBottom: 33 }}>Регистрация</Text>

        <View style={{ ...styles.form, marginBottom: 16 }}>
          <TextInput
            style={{ ...styles.input, marginBottom: 16 }}
            textAlign={'left'}
            placeholder={'Логин'}
            onFocus={opensKeyboard}
          />

          <TextInput
            style={{ ...styles.input, marginBottom: 16 }}
            textAlign={'left'}
            placeholder={'Адрес электронной почты'}
            onFocus={opensKeyboard}
          />

          <View style={styles.inputPassword}>
            <TextInput
              style={styles.input}
              textAlign={'left'}
              secureTextEntry={isHiddenPassword}
              placeholder={'Пароль'}
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

          <Button text={'Зарегистрироваться'} />
        </View>

        <View>
          <Text style={styles.inputPasswordBtnText}>Уже есть аккаунт? Войти</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
};

export default RegistrationForm;

const styles = StyleSheet.create({
  containerForm: {
    height: '100%',
    paddingBottom: 78,
    paddingTop: 92,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 30,
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#212121',
  },
  form: {
    marginHorizontal: 16,
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
  inputPassword: {
    position: 'relative',
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