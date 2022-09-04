import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import { fonts, sizeText } from 'res/vars.js';

export default Button = ({
  text,
  textColor,
  background,
  submitState
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.btn,
        backgroundColor: background,
        borderColor: background,
      }}
      activeOpacity={0.8}
      onPress={submitState}
    >
      <Text style={{
        ...styles.btnText,
        color: textColor
      }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  btn: {
    height: 51,
    borderWidth: 1,
    borderRadius: 100,
    marginTop: 43,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',

    // ...Platform.select({
    //   ios: {
    //     backgroundColor: 'transparent'
    //   },
    //   android: {
    //     backgroundColor: '#56C330'
    //   },
    // })
  },
  btnText: {
    fontFamily: fonts.medium,
    fontSize: sizeText.normal,
    lineHeight: 19,
    textAlign: 'center',

    // ...Platform.select({
    //   ios: {
    //     color: '#56C330',
    //   },
    //   android: {
    //     color: '#fff',
    //   },
    // }),
  }
});