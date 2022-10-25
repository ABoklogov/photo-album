import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

import CreatePostPhoto from 'components/CreatePostPhoto';
import Footer from 'components/Footer';
import BtnUploadPhoto from 'components/shared/BtnUploadPhoto';
import CreatePostForm from "components/CreatePostForm";
import BtnDeletePost from 'components/shared/BtnDeletePost';
import { colors } from 'res/vars.js';

export default CreatePostsScreen = ({ navigation }) => {
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
    <ScrollView>
      <TouchableWithoutFeedback onPress={removesKeyboard}>
        <View style={styles.container}>
          <View>
            <CreatePostPhoto />

            <View style={styles.btnUploadPhoto}>
              <BtnUploadPhoto />
              <CreatePostForm opensKeyboard={opensKeyboard} />
            </View>
          </View>

          {!isShowKeyboard &&
            <Footer>
              <BtnDeletePost />
            </Footer>}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 32,
    backgroundColor: colors.white,
  },
  btnUploadPhoto: {
    marginTop: 8,
  },
});