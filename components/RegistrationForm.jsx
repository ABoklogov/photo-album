import { useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import Avatar from './Avatar';
import Button from './shared/Button';
import Input from './shared/Input';
import InputPassword from './shared/InputPassword';

const initialState = {
  login: '',
  email: '',
  password: '',
};

const RegistrationForm = ({ opensKeyboard, navigation }) => {
  const [state, setState] = useState(initialState);

  const submitState = () => {
    console.log(state);
    onChangeLogin('');
    onChangeEmail('');
    onChangePassword('');
    logIn();
  };
  const onChangeLogin = (value) => {
    setState((prevState) => ({ ...prevState, login: value }))
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
      <Avatar />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text style={{ ...styles.title, marginBottom: 33 }}>Регистрация</Text>

        <View style={{ ...styles.form, marginBottom: 16 }}>
          <View style={styles.inputPosition}>
            <Input
              placeholder={'Логин'}
              opensKeyboard={opensKeyboard}
              stateKey={state.login}
              onChange={onChangeLogin}
            />
          </View>

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

          <Button text={'Зарегистрироваться'} submitState={submitState} />
        </View>

        <View>
          <Text
            style={styles.linkBottom}
            onPress={() => navigation.navigate("Login")}
          >
            Уже есть аккаунт? Войти
          </Text>
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