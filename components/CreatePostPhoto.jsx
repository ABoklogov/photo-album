import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Image,
} from "react-native";
import BtnCreatePhoto from 'components/shared/BtnCreatePhoto';
import * as ScreenOrientation from 'expo-screen-orientation';
import { colors } from 'res/vars.js';

export default CreatePostPhoto = ({ newPhoto }) => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    offOrientation();
  }, []);

  useEffect(() => {
    if (newPhoto) {
      setPhoto(newPhoto);
    }
  }, [newPhoto]);

  const offOrientation = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  };

  return (
    <View style={styles.container}>
      {photo &&
        <Image
          style={styles.preview}
          source={{ uri: photo }}
        />}
      <View style={styles.btnTake}>
        <BtnCreatePhoto takePhoto={() => navigation.navigate('Camera')} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: "center",
    alignItems: 'center',
    height: 240,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.borderGrey,
    backgroundColor: colors.lightGrey,
    overflow: 'hidden',
  },
  preview: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  // image: {
  //   width: '100%',
  //   height: '100%',
  // },
  btnTake: {
    position: 'absolute',
    // zIndex: -1,
  },
});