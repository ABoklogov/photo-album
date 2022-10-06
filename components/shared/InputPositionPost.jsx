import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import MapMarker from 'icons/MapMarker';
import { colors, fonts, sizeText } from 'res/vars.js';

export default InputPositionPost = ({
  placeholder,
  opensKeyboard,
  stateKey,
  onChange
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigation();

  const chengeFocusInput = () => {
    setIsFocus(true);
    opensKeyboard();
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={{ ...styles.input, borderBottomColor: isFocus ? colors.green : colors.borderGrey }}
        textAlign={'left'}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        onFocus={chengeFocusInput}
        onBlur={() => setIsFocus(false)}
        value={stateKey}
        onChangeText={(value) => onChange(value)}
      />

      <View style={styles.icon}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Map')}
        >
          <MapMarker />
        </TouchableOpacity>
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
    fontFamily: fonts.medium,
    fontSize: sizeText.normal,
    lineHeight: 19,
    borderWidth: 1,
    borderLeftColor: colors.white,
    borderRightColor: colors.white,
    borderTopColor: colors.white,
    height: 50,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 28,
    color: colors.black,
    backgroundColor: colors.white,
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: '25%',
  }
});