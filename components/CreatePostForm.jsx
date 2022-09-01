import { useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
} from "react-native";

import Button from './shared/Button';
import ImputNamePost from './shared/InputNamePost';

const statePost = {
  name: '',
  position: '',
};

export default CreatePostForm = ({ opensKeyboard, navigation }) => {
  const [state, setState] = useState(statePost);

  const submitState = () => {
    console.log(state);
    onChangeName('');
    onChangePosition('');
    // logIn();
  };

  const onChangeName = (value) => {
    setState((prevState) => ({ ...prevState, name: value }))
  };
  const onChangePosition = (value) => {
    setState((prevState) => ({ ...prevState, position: value }))
  };
  // const logIn = () => navigation.navigate("Home");

  return (
    <View style={styles.containerForm}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View>
          <View style={styles.inputPosition}>
            <ImputNamePost
              placeholder={'Название...'}
              opensKeyboard={opensKeyboard}
              stateKey={state.name}
              onChange={onChangeName}
            />
          </View>

          {/* <InputPassword
            placeholder={'Пароль'}
            opensKeyboard={opensKeyboard}
            stateKey={state.password}
            onChange={onChangePassword}
          /> */}

          <Button
            text={'Опубликовать'}
            background={'#F6F6F6'}
            textColor={'#BDBDBD'}
            submitState={submitState}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  )
};

const styles = StyleSheet.create({
  containerForm: {
    marginTop: 38,
    backgroundColor: '#fff',
    marginHorizontal: 16,
  },
  inputPosition: {
    marginBottom: 16
  },
});