import { useState } from 'react';
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";

const Button = ({ text }) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={0.8}
    >
      <Text style={styles.btnText}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    height: 51,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#56C330',
    marginTop: 43,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',

    ...Platform.select({
      ios: {
        backgroundColor: 'transparent'
      },
      android: {
        backgroundColor: '#56C330'
      },
    })
  },
  btnText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    ...Platform.select({
      ios: {
        color: '#56C330',
      },
      android: {
        color: '#fff',
      },
    }),
  }
});