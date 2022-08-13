import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
} from "react-native";

const Input = ({ placeholder, opensKeyboard }) => {
  return (
    <TextInput
      style={styles.input}
      textAlign={'left'}
      placeholder={placeholder}
      onFocus={opensKeyboard}
    />
  )
};

export default Input;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    height: 50,
    padding: 15,
    color: '#212121',
    backgroundColor: '#F6F6F6',
  },
});