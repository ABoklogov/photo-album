import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import * as Location from 'expo-location';
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
  const [hasLocationPromissions, setHasLocationPromissions] = useState();
  const [state, setState] = useState(statePost);
  console.log("🚀 ~ state", state)
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    (async () => {
      const locationPromissions = await Location.requestForegroundPermissionsAsync(); // разрешение на определение местоположения
      setHasLocationPromissions(locationPromissions.status === 'granted');
    })();

    // слушатель закрытия клавиатуры (при закрытии клавиатуры возвращаемся в первоначальное состояние):
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => setIsShowKeyboard(false));
    return () => keyboardDidHide.remove();
  }, []);

  useEffect(() => {
    if (route.params) {
      onChangePhoto(route.params.photo);
      locates(); // определяем местоположение
    }
  }, [route.params]);

  const locates = async () => {
    // находим координаты
    let { coords } = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = coords;
    let address = '';

    if (coords) {
      // находим адрес
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });

      for (let item of response) {
        if (item.city) {
          address = `${item.city}, ${item.country}`;
        } else {
          address = `${item.region}, ${item.country}`;
        };
      };
      onChangeCoords({ latitude, longitude });
      onChangePosition(address);
    };
  };

  const submitState = () => {
    console.log(state);
    removeState();
    navigation.navigate('Posts', { state });
  };

  const removeState = () => {
    onChangeName('');
    onChangePosition('');
    onChangePhoto(null);
    onChangeCoords(null);
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

  const dataIsFilled = state.name && state.position && state.photo;

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
                opensKeyboard={opensKeyboard}
                dataIsFilled={dataIsFilled}
              />
            </View>
          </View>
        </ScrollView>

        {!isShowKeyboard &&
          <Footer>
            <BtnDeletePost
              dataIsFilled={dataIsFilled}
              removeState={removeState}
            />
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