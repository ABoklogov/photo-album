import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Background from '../components/shared/Background';
import RegistrationForm from "../components/RegistrationForm";

const image = require('../assets/images/photo_BG.jpg');

const RegistrationScreen = () => {
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
    <Background image={image}>
      <TouchableWithoutFeedback onPress={removesKeyboard}>
        <View style={{
          ...styles.wrapper,
          paddingTop: isShowKeyboard ? 166 : 263,
        }}>
          <RegistrationForm opensKeyboard={opensKeyboard} />
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

export default RegistrationScreen;