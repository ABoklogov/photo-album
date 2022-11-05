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

export default CreatePostsScreen = ({ route }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    // слушатель закрытия клавиатуры (при закрытии клавиатуры возвращаемся в первоначальное состояние):
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => setIsShowKeyboard(false));

    return () => keyboardDidHide.remove();
  }, []);

  const removesKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const opensKeyboard = () => setIsShowKeyboard(true);

  return (
    <TouchableWithoutFeedback onPress={removesKeyboard}>
      <View style={styles.container}>
        <ScrollView>
          <View>
            <CreatePostPhoto newPhoto={route.params ? route.params.photo : null} />

            <View style={styles.btnUploadPhoto}>
              <BtnUploadPhoto />
              <CreatePostForm
                opensKeyboard={opensKeyboard}
                newPhoto={route.params ? route.params.photo : null}
              />
            </View>
          </View>
        </ScrollView>

        {!isShowKeyboard &&
          <Footer>
            <BtnDeletePost />
          </Footer>}
      </View>
    </TouchableWithoutFeedback>
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