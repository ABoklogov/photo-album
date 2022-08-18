import { useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
} from "react-native";

import Button from './shared/Button';
import Input from './shared/Input';
import InputPassword from './shared/InputPassword';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = ({ opensKeyboard, navigation }) => {
  const [state, setState] = useState(initialState);

  const submitState = () => {
    console.log(state);
    onChangeEmail('');
    onChangePassword('');
    logIn();
  };

  const onChangeEmail = (value) => {
    setState((prevState) => ({ ...prevState, email: value }))
  };
  const onChangePassword = (value) => {
    setState((prevState) => ({ ...prevState, password: value }))
  };
  const logIn = () => navigation.navigate("Home");

  return (
    <View style={styles.containerForm}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text style={{ ...styles.title, marginBottom: 33 }}>Войти</Text>

        <View style={{ ...styles.form, marginBottom: 16 }}>
          <View style={styles.inputPosition}>
            <Input
              placeholder={'Адрес электронной почты'}
              opensKeyboard={opensKeyboard}
              stateKey={state.email}
              onChange={onChangeEmail}
            />
          </View>

          <InputPassword
            placeholder={'Пароль'}
            opensKeyboard={opensKeyboard}
            stateKey={state.password}
            onChange={onChangePassword}
          />

          <Button text={'Войти'} submitState={submitState} />
        </View>

        <View>
          <Text
            style={styles.linkBottom}
            onPress={() => navigation.navigate("Registration")}
          >
            Нет аккаунта? Зарегистрироваться
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
};

export default LoginForm;

const styles = StyleSheet.create({
  containerForm: {
    height: '100%',
    paddingTop: 32,
    paddingBottom: 78,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontFamily: 'GothamPro-Bold',
    fontSize: 30,
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#212121',
  },
  form: {
    marginHorizontal: 16,
  },
  inputPosition: {
    marginBottom: 16
  },
  linkBottom: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 16,
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 19,
    color: '#0097ff',
  },
});