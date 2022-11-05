import { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
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
  photo: null,
};

export default CreatePostForm = ({ opensKeyboard, newPhoto }) => {
  const navigation = useNavigation();
  const [state, setState] = useState(statePost);
  const dataIsFilled = state.name && state.position && state.photo;

  const submitState = () => {
    console.log(state);
    onChangeName('');
    onChangePosition('');
    onChangePhoto(null);
    navigation.navigate('Posts', { state });
  };

  useEffect(() => {
    onChangePhoto(newPhoto);
  }, [newPhoto]);

  const onChangeName = (name) => {
    setState((prevState) => ({ ...prevState, name: name }));
  };
  const onChangePosition = (position) => {
    setState((prevState) => ({ ...prevState, position: position }));
  };
  const onChangePhoto = (photo) => {
    setState((prevState) => ({ ...prevState, photo: photo }));
  };

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
            background={dataIsFilled ? colors.green : colors.lightGrey}
            textColor={dataIsFilled ? colors.white : colors.grey}
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