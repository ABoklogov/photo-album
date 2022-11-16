import { useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
} from "react-native";

import { signUpUser } from 'store/user/userOperations';
import { useDispatch } from 'react-redux';

import Avatar from 'components/Avatar';
import Title from 'components/shared/Title';
import Button from 'components/shared/Button';
import Input from 'components/shared/Input';
import InputPassword from 'components/shared/InputPassword';

import {
  strings,
  colors,
  fonts,
  sizeText
} from 'res/vars.js';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export default RegistrationForm = ({ opensKeyboard, navigation }) => {
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const submitState = () => {
    console.log(state);
    dispatch(signUpUser(state));
    // очищаем state
    setState(initialState);
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

  return (
    <View style={styles.containerForm}>
      <Avatar />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={{ marginBottom: 33 }}>
          <Title title={strings.titleRegistration} />
        </View>

        <View style={{ ...styles.form, marginBottom: 16 }}>
          <View style={styles.inputPosition}>
            <Input
              placeholder={strings.placeholderLogin}
              opensKeyboard={opensKeyboard}
              stateKey={state.login}
              onChange={onChangeLogin}
            />
          </View>

          <View style={styles.inputPosition}>
            <Input
              placeholder={strings.placeholderEmail}
              opensKeyboard={opensKeyboard}
              stateKey={state.email}
              onChange={onChangeEmail}
            />
          </View>

          <InputPassword
            placeholder={strings.placeholderPassword}
            opensKeyboard={opensKeyboard}
            stateKey={state.password}
            onChange={onChangePassword}
          />

          <Button
            text={strings.buttonRegistration}
            submitState={submitState}
            background={colors.green}
            textColor={colors.white}
          />
        </View>

        <View>
          <Text
            style={styles.linkBottom}
            onPress={() => navigation.navigate("Login")}
          >
            {strings.linkRegistration}
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
};

const styles = StyleSheet.create({
  containerForm: {
    height: '100%',
    paddingBottom: 78,
    paddingTop: 92,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    marginHorizontal: 16,
  },
  inputPosition: {
    marginBottom: 16
  },
  linkBottom: {
    fontFamily: fonts.medium,
    fontSize: sizeText.normal,
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 19,
    color: colors.blue,
  },
});