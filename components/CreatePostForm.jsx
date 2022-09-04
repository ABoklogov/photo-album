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
import { colors, strings } from 'res/vars.js';

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
            placeholder={strings.placeholderNamePost}
            opensKeyboard={opensKeyboard}
            stateKey={state.name}
            onChange={onChangeName}
          />

          <InputPositionPost
            placeholder={strings.placeholderPositionPost}
            opensKeyboard={opensKeyboard}
            stateKey={state.position}
            onChange={onChangePosition}
          />

          <Button
            text={strings.buttonPost}
            background={colors.lightGrey}
            textColor={colors.grey}
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
    backgroundColor: colors.white,
    marginHorizontal: 16,
  },
});