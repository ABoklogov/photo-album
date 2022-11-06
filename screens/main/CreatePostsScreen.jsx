import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
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

const statePost = {
  name: '',
  photo: null,
  position: '',
  coords: null,
};

export default CreatePostsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [state, setState] = useState(statePost);
  console.log("🚀 ~ state", state)
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    // слушатель закрытия клавиатуры (при закрытии клавиатуры возвращаемся в первоначальное состояние):
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => setIsShowKeyboard(false));
    return () => keyboardDidHide.remove();
  }, []);

  useEffect(() => {
    if (route.params) {
      onChangePhoto(route.params.photo);
      onChangePosition(route.params.location.address);
      onChangeCoords(route.params.location.coords);
    }
    // onChangePhoto(newPhoto);
  }, [route.params]);

  const submitState = () => {
    console.log(state);
    onChangeName('');
    onChangePosition('');
    onChangePhoto(null);
    navigation.navigate('Posts', { state });
  };

  const onChangeName = (name) => {
    setState((prevState) => ({ ...prevState, name: name }));
  };
  const onChangePosition = (position) => {
    setState((prevState) => ({ ...prevState, position: position }));
  };
  const onChangePhoto = (photo) => {
    setState((prevState) => ({ ...prevState, photo: photo }));
  };
  const onChangeCoords = (coords) => {
    setState((prevState) => ({ ...prevState, coords: coords }));
  };

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
            <CreatePostPhoto newPhoto={state.photo} />

            <View style={styles.btnUploadPhoto}>
              <BtnUploadPhoto />

              <CreatePostForm
                state={state}
                submitState={submitState}
                onChangeName={onChangeName}
                onChangePosition={onChangePosition}
                onChangePhoto={onChangePhoto}
                opensKeyboard={opensKeyboard}
                newPhoto={state.photo}
                location={state.position}
                coords={state.coords}
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