import { useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from "react-native";

import Button from 'components/shared/Button';
import ImputNamePost from 'components/shared/InputNamePost';
import InputPositionPost from 'components/shared/InputPositionPost';

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
          <ImputNamePost
            placeholder={'Название...'}
            opensKeyboard={opensKeyboard}
            stateKey={state.name}
            onChange={onChangeName}
          />

          <InputPositionPost
            placeholder={'Местность...'}
            opensKeyboard={opensKeyboard}
            stateKey={state.position}
            onChange={onChangePosition}
          />

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
    marginTop: 32,
    backgroundColor: '#fff',
    marginHorizontal: 16,
  },
});