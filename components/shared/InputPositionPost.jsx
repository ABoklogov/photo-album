import {
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import MapMarker from '../icons/MapMarker';

export default InputPositionPost = ({
  placeholder,
  opensKeyboard,
  stateKey,
  onChange
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        textAlign={'left'}
        placeholder={placeholder}
        placeholderTextColor={'#BDBDBD'}
        onFocus={opensKeyboard}
        value={stateKey}
        onChangeText={(value) => onChange(value)}
      />

      <View style={styles.icon}>
        <MapMarker />
      </View>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 16,
  },
  input: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderTopColor: '#fff',
    borderBottomColor: '#E8E8E8',
    height: 50,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 28,
    color: '#212121',
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: '25%',
  }
});