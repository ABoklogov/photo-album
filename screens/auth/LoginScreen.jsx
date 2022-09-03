import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Background from 'components/shared/Background';
import LoginForm from 'components/LoginForm';
import { images } from 'res/vars.js';

export default LoginScreen = ({ navigation }) => {
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
          paddingTop: isShowKeyboard ? 300 : 323,
        }}>
          <LoginForm
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