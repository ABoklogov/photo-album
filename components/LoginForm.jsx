import { useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
} from "react-native";

import { signIpUser } from 'store/user/userOperations';
import { useDispatch } from 'react-redux';

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
  email: '',
  password: '',
};

export default LoginForm = ({ opensKeyboard, navigation }) => {
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const submitState = () => {
    console.log(state);
    dispatch(signIpUser(state));
    // очищаем state
    setState(initialState);
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
        <View style={{ marginBottom: 33 }}>
          <Title title={strings.buttonLogin} />
        </View>

        <View style={{ ...styles.form, marginBottom: 16 }}>
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
            text={strings.buttonLogin}
            submitState={submitState}
            background={colors.green}
            textColor={colors.white}
          />
        </View>

        <View>
          <Text
            style={styles.linkBottom}
            onPress={() => navigation.navigate("Registration")}
          >
            {strings.linkLogin}
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
};

const styles = StyleSheet.create({
  containerForm: {
    height: '100%',
    paddingTop: 32,
    paddingBottom: 78,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: sizeText.big,
    fontStyle: 'normal',
    textAlign: 'center',
    color: colors.black,
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