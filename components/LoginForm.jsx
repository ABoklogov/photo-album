import { useState, useEffect } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
} from "react-native";
// import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';
// import * as SplashScreen from 'expo-splash-screen';

import Button from './shared/Button';
import Input from './shared/Input';
import InputPassword from './shared/InputPassword';

// SplashScreen.preventAutoHideAsync();
// const loadFonts = async () => {
//   await Font.loadAsync({
//     "GothamProBlack": require("../assets/fonts/GothamProBlack.ttf"),
//     "GothamProRegular": require("../assets/fonts/GothamProRegular.ttf"),
//   });
// };

const initialState = {
  email: '',
  password: '',
};

const LoginForm = ({ opensKeyboard }) => {
  // const [isReady, setIsReady] = useState(false);
  const [state, setState] = useState(initialState);

  const submitState = () => {
    console.log(state);
  };
  const onChangeEmail = (value) => {
    setState((prevState) => ({ ...prevState, email: value }))
  };
  const onChangePassword = (value) => {
    setState((prevState) => ({ ...prevState, password: value }))
  };

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
          <Text style={styles.linkBottom}>Нет аккаунта? Зарегистрироваться</Text>
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
    fontFamily: 'gotham_pro_black',
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
    fontSize: 16,
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 19,
    color: '#0097ff',
  },
});