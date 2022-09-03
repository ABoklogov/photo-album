import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Background from 'components/shared/Background';
import RegistrationForm from "components/RegistrationForm";
import { images } from 'res/vars.js';

export default RegistrationScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // слушатель закрытия клавиатуры (при закрытии клавиатуры возвращаемся в первоначальное состояние):
  useEffect(() => {
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => setIsShowKeyboard(false));
    return () => keyboardDidHide.remove();
  }, []);

  const removesKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const opensKeyboard = () => setIsShowKeyboard(true);

  return (
    <Background image={images.background}>
      <TouchableWithoutFeedback onPress={removesKeyboard}>
        <View style={{
          ...styles.wrapper,
          paddingTop: isShowKeyboard ? 175 : 263,
        }}>
          <RegistrationForm
            opensKeyboard={opensKeyboard}
            navigation={navigation}
          />
        </View>
      </TouchableWithoutFeedback>
    </Background>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
});