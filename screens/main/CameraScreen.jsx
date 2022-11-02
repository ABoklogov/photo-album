import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as ScreenOrientation from 'expo-screen-orientation';
// import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import BtnCreatePhoto from 'components/shared/BtnCreatePhoto';
import BtnToglleTypePhoto from 'components/shared/BtnToglleTypePhoto';
import BtnToggleFlashPhoto from 'components/shared/BtnToggleFlashPhoto';
import Message from 'components/shared/Message';
import { colors, strings } from 'res/vars.js';

export default CameraScreen = () => {
  // разрешения
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [camera, setCamera] = useState(null);
  // соотношения сторон и отступы камеры
  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState('4:3');
  const { height, width } = Dimensions.get('window');
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);
  // настройки камеры
  const [type, setType] = useState(CameraType.back); // тип
  const [flash, setFlash] = useState(FlashMode.off); // вспышка
  const [orientation, setOrientation] = useState(1); // поворот экрана 
  const [photo, setPhoto] = useState(); // фото

  // console.log("🚀 ~ hasCameraPermission", hasCameraPermission)
  // console.log("🚀 ~ hasMediaLibraryPermission", hasMediaLibraryPermission)
  // console.log("🚀 ~ type", type)
  // console.log("🚀 ~ flash", flash)
  // console.log("🚀 ~ photo", photo)
  // console.log("🚀 ~ orientation", orientation)
  console.log("🚀 ~ imagePadding", imagePadding)
  console.log("🚀 ~ width", width)
  console.log("🚀 ~ height", height)
  console.log("🚀 ~ screenRatio", screenRatio)
  console.log("🚀 ~ ratio", ratio)
  console.log('-----------------------------------');

  const onOrientation = async () => {
    await ScreenOrientation.unlockAsync();
  };
  const offOrientation = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  };
  // получаем разрешения для камеры и доступ к внутренней памяти
  useEffect(() => {
    (async () => {
      const cameraPromission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPromissions = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPromission.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryPromissions.status === 'granted');
    })();
    // разблокируем поворот экрана
    onOrientation();
    // определяет ориентацию экрана и записывает в стейт
    const onChengeOrientation = async () => {
      const orientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(orientation);
    };
    // вешаем слушатель на ориентацию экрана
    ScreenOrientation.addOrientationChangeListener(onChengeOrientation);
    // при уходе со страницы убираем слушателя на ориентацию экрана и блокируем поворот экрана

    // определяем соотношения сторон, поддерживаеммых телефоном
    // (async () => {
    //   const ratios = await camera.getSupportedRatiosAsync();
    //   setRatios(ratios);
    // })();

    return () => {
      ScreenOrientation.removeOrientationChangeListeners();
      offOrientation();
    };
  }, []);

  const prepareRatio = async () => {
    let desiredRatio = '4:3'; // дефолтное соотношение сторон

    if (Platform.OS === 'android') {
      const ratios = await camera.getSupportedRatiosAsync();

      // рассчитываем поддерживаемые соотношения сторон камеры
      let distances = {};
      let realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(':');

        let realRatio;
        if (orientation === 1) {
          realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        } else {
          realRatio = parseInt(parts[1]) / parseInt(parts[0]);
        };
        // console.log("🚀 ~ prepareRatio ~ realRatio", realRatio)
        realRatios[ratio] = realRatio;
        // ratio не может быть выше экрана, поэтому нам не нужен abs()
        const distance = screenRatio - realRatio;
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      };
      // устанавливаем лучшее соотношение
      desiredRatio = minDistance;
      //  рассчитываем разницу между шириной камеры и высотой экрана
      const remainder = Math.floor(
        (height - realRatios[desiredRatio] * width) / 2
      );
      // устанавливаем отступы и коэффициент предварительного просмотра
      setImagePadding(remainder * 2);
      setRatio(desiredRatio);
      setIsRatioSet(true);
    }
  };

  // камера должна быть загружена, чтобы был доступ к поддерживаемым соотношениям
  const setCameraReady = async () => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  const takePhoto = async () => {
    let options = {
      quality: 1,
      exif: false
    };
    let newPhoto = await camera.takePictureAsync(options);
    setPhoto(newPhoto.uri);
  };

  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  };
  const toggleFlash = () => {
    setFlash(current => (current === FlashMode.off ? FlashMode.on = 'on' : FlashMode.off = 'off'))
  };

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
  } else {
    return (
      <View style={styles.container}>
        <Camera
          onCameraReady={setCameraReady}
          ref={ref => setCamera(ref)}
          style={{
            ...styles.camera,
            marginTop: orientation === 1 ? imagePadding : 0,
            marginLeft: orientation === 1 ? 0 : imagePadding,
          }}
          type={type}
          ratio={ratio}
        >
          {photo && (
            <View style={styles.previewContainer}>
              <Image
                style={styles.previewPhoto}
                source={{ uri: photo }}
              />
            </View>
          )}
        </Camera>

        {!photo && (
          <View style={orientation === 1 ? styles.blockBtnPortret : styles.blockBtnHorizont}>
            <BtnToggleFlashPhoto
              toggleFlash={toggleFlash}
              flash={flash}
            />
            <BtnCreatePhoto takePhoto={takePhoto} />
            <BtnToglleTypePhoto toggleCamera={toggleCameraType} />
          </View>
        )}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  previewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  previewPhoto: {
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