import { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from "react-native";
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as ScreenOrientation from 'expo-screen-orientation';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import BtnCreatePhoto from 'components/shared/BtnCreatePhoto';
import BtnToglleTypePhoto from 'components/shared/BtnToglleTypePhoto';
import BtnToggleFlashPhoto from 'components/shared/BtnToggleFlashPhoto';
import Message from 'components/shared/Message';
import { colors, strings } from 'res/vars.js';

export default CameraScreen = () => {
  let cameraRef = useRef();

  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [photo, setPhoto] = useState();
  const [orientation, setOrientation] = useState(1);
  console.log("🚀 ~ hasCameraPermission", hasCameraPermission)
  console.log("🚀 ~ hasMediaLibraryPermission", hasMediaLibraryPermission)
  console.log("🚀 ~ type", type)
  console.log("🚀 ~ flash", flash)
  console.log("🚀 ~ photo", photo)
  console.log("🚀 ~ orientation", orientation)

  // получаем разрешения для камеры и доступ к внутренней памяти
  useEffect(() => {
    (async () => {
      const cameraPromission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPromissions = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPromission.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryPromissions.status === 'granted');
    })();

    // определяет ориентацию экрана и записывает в стейт
    const onChengeOrientation = async () => {
      const orientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(orientation);
    };
    // вешаем слушатель на ориентацию экрана
    ScreenOrientation.addOrientationChangeListener(onChengeOrientation);
    return () => {
      ScreenOrientation.removeOrientationChangeListeners()
    };
  }, []);

  // сообщения, если не получены разрешения
  if (hasCameraPermission === undefined) {
    return (
      <View style={styles.container}>
        <Message message={strings.permissionRequest} />
      </View>
    )
  } else if (!hasCameraPermission) {
    return (
      <View style={styles.container}>
        <Message message={strings.noPermission} />
      </View>
    )
  };

  const takePhoto = async () => {
    let options = {
      quality: 1,
      exif: false
    };
    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto.uri);
  };

  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  };
  const toggleFlash = () => {
    setFlash(current => (current === FlashMode.off ? FlashMode.on = 'on' : FlashMode.off = 'off'))
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={type}
      // ratio={'3:2'}
      >
        {photo &&
          <Image
            style={styles.preview}
            source={{ uri: photo }}
          />}

        {!photo &&
          <View style={orientation === 1 ? styles.blockBtnPortret : styles.blockBtnHorizont}>
            <BtnToggleFlashPhoto
              toggleFlash={toggleFlash}
              flash={flash}
            />
            <BtnCreatePhoto takePhoto={takePhoto} />
            <BtnToglleTypePhoto toggleCamera={toggleCameraType} />
          </View>}
      </Camera>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
  },
  camera: {
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // определяем высоту блока камеры в зависимости от ширины экрана и соотношения сторон камеры равное '3:2'
    // height: ((Dimensions.get('window').width - 32) * 3) / 2,
  },
  preview: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  blockBtnPortret: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  blockBtnHorizont: {
    position: 'absolute',
    right: 15,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
});