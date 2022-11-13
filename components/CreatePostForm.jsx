import { useEffect, useState } from 'react';

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

export default CreatePostForm = ({
  state,
  submitState,
  onChangeName,
  onChangePosition,
  opensKeyboard,
  dataIsFilled,
}) => {

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
            state={state}
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