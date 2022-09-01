import {
  StyleSheet,
  TextInput,
} from "react-native";

export default InputNamePost = ({
  placeholder,
  opensKeyboard,
  stateKey,
  onChange
}) => {
  return (
    <TextInput
      style={styles.input}
      textAlign={'left'}
      placeholder={placeholder}
      placeholderTextColor={'#BDBDBD'}
      onFocus={opensKeyboard}
      value={stateKey}
      onChangeText={(value) => onChange(value)}
    />
  )
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderTopColor: '#fff',
    borderBottomColor: '#E8E8E8',
    height: 34,
    paddingBottom: 15,
    color: '#212121',
    backgroundColor: '#fff',
  },
});