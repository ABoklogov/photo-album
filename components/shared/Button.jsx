import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";

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
    fontFamily: 'GothamPro-Medium',
    fontSize: 16,
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