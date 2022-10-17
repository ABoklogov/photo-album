import { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
} from "react-native";
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import BtnCreatePhoto from 'components/shared/BtnCreatePhoto';
import Message from 'components/shared/Message';
import { colors } from 'res/vars.js';

export default CreatePostPhoto = () => {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  // const [type, setType] = useState(Camera.Constants.Type.back);

  // получаем разрешения для камеры и доступ к внутренней памяти
  useEffect(() => {
    (async () => {
      const cameraPromission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPromissions = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPromission.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryPromissions.status === 'granted');
    })()
  }, []);

  if (hasCameraPermission === undefined) {
    return (
      <View style={styles.container}>
        <Message message={'Запрос разрешений...'} />
        <BtnCreatePhoto takePhoto={takePhoto} />
      </View>
    )
  } else if (!hasCameraPermission) {
    return (
      <View style={styles.container}>
        <Message message={'Разрешение для камеры не предоставлено.Пожалуйста, измените это в настройках.'} />
        <BtnCreatePhoto takePhoto={takePhoto} />
      </View>
    )
  }

  let takePhoto = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
      // onCameraReady={onCameraReady}
      // type={type}
      // flashMode={Camera.Constants.FlashMode.on}
      // onMountError={(error) => {
      //   console.log("cammera error", error);
      // }}
      >
        <BtnCreatePhoto takePhoto={takePhoto} />
      </Camera>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
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
  camera: {
    justifyContent: "center",
    alignItems: 'center',
    height: '100%',
    width: '100%',
  }
});