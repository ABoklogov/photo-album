import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CommentsSend from 'icons/CommentsSend';
import { colors, fonts, sizeText, strings } from 'res/vars.js';
import data from 'bd/data.js';

export default CommentsForm = ({ scrollEnd }) => {
  const [comment, setComment] = useState('');

  const submitComment = () => {
    console.log("🚀 ~ comment",
      {
        idUser: data.id,
        comment: comment
      });
    scrollEnd();
    setComment('');
  };

  const onChangeComment = (value) => {
    setComment(value)
  };

  return (
    <View style={styles.form}>
      <TextInput style={styles.input}
        textAlign={'left'}
        placeholder={strings.placeholderCommentsForm}
        placeholderTextColor={colors.grey}
        multiline={true}
        maxLength={500}
        value={comment}
        onChangeText={value => onChangeComment(value)}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={submitComment}
      >
        <CommentsSend comment={comment} />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  form: {
    position: 'relative',
    width: '100%',
  },
  input: {
    fontFamily: fonts.medium,
    fontSize: sizeText.normal,
    fontStyle: 'normal',
    lineHeight: 19,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.borderGrey,
    maxHeight: 100,
    padding: 15,
    paddingRight: 50,
    backgroundColor: colors.lightGrey,
  },
  button: {
    position: 'absolute',
    top: '50%',
    right: 8,
    transform: [
      { translateX: 0 },
      { translateY: -17 },
    ]
  }
});
