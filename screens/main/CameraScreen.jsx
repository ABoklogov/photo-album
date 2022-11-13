import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as MediaLibrary from 'expo-media-library';
import BtnCreatePhoto from 'components/shared/BtnCreatePhoto';
import BtnToglleTypePhoto from 'components/shared/BtnToglleTypePhoto';
import BtnToggleFlashPhoto from 'components/shared/BtnToggleFlashPhoto';
import BtnAddPhoto from 'components/shared/BtnAddPhoto';
import BtnReshootPhoto from 'components/shared/BtnReshootPhoto';
import Message from 'components/shared/Message';
import { strings } from 'res/vars.js';
import { colors } from '../../res/vars';

export default CameraScreen = () => {
  const navigation = useNavigation();
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
  const [photo, setPhoto] = useState(null); // фото
  const [photoOrientation, setPhotoOrientation] = useState(null); // ориентайия во время сделанной фотографии

  // console.log("🚀 ~ hasCameraPermission", hasCameraPermission)
  // console.log("🚀 ~ hasMediaLibraryPermission", hasMediaLibraryPermission)
  // console.log("🚀 ~ type", type)
  // console.log("🚀 ~ flash", flash)
  // console.log("🚀 ~ photo", photo)
  // console.log("🚀 ~ orientation", orientation)
  // console.log("🚀 ~ imagePadding", imagePadding)
  // console.log("🚀 ~ width", width)
  // console.log("🚀 ~ height", height)
  // console.log("🚀 ~ screenRatio", screenRatio)
  // console.log("🚀 ~ ratio", ratio)
  // console.log("🚀 ~ photoOrientation", photoOrientation)
  // console.log('-----------------------------------');

  let photoWidth = width;
  let photoHeight = height;
  // расчет размера сделанной фотографии в зависимости от поворота экрана  
  if (photoOrientation === 1 && orientation !== 1) {
    photoWidth = width - 240;
    photoHeight = height - 32;
  } else if (photoOrientation === 1 && orientation === 1) {
    photoWidth = width - 32;
    photoHeight = 240;
  } else if (photoOrientation !== 1 && orientation === 1) {
    photoWidth = width - 32;
    photoHeight = 240;
  } else if (photoOrientation !== 1 && orientation !== 1) {
    photoWidth = width - imagePadding * 2;
    photoHeight = height;
  };

  const onOrientation = async () => {
    await ScreenOrientation.unlockAsync();
  };
  const offOrientation = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  };
  // получаем разрешения для камеры и доступ к внутренней памяти
  useEffect(() => {
    (async () => {
      const cameraPromission = await Camera.requestCameraPermissionsAsync(); // разрешение на камеру
      const mediaLibraryPromissions = await MediaLibrary.requestPermissionsAsync(); // разрешение на доступ к памяти телефона

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
    return () => {
      ScreenOrientation.removeOrientationChangeListeners();
      offOrientation();
    };
  }, []);

  const prepareRatio = async () => {
    let desiredRatio = '4:3'; // дефолтное соотношение сторон
    if (Platform.OS === 'android') {
      // определяем соотношения сторон, поддерживаеммых телефоном
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
      setImagePadding(remainder);
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
      exif: false,
      // base64: true,
    };
    try {
      let newPhoto = await camera.takePictureAsync(options);
      setPhotoOrientation(orientation);
      setPhoto(newPhoto.uri);
    } catch (error) {
      console.log(error);
    };
    // let newPhoto = () => {
    //   setTimeout(() => {
    //     setPhoto(require('assets/images/test_photo.jpg'));
    //   }, 1000);
    // };
    // newPhoto();
  };

  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const toggleFlash = () => {
    if (type === CameraType.back) {
      setFlash(flash === FlashMode.off ? FlashMode.on = 'on' : FlashMode.off = 'off');
    };
  };

  const addPhoto = async () => {
    navigation.navigate('CreatePosts', { photo });
  };

  const reshootPhoto = () => {
    setPhoto(null);
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
      <View style={{
        ...styles.container,
        // стили для портретной ориентации
        marginTop: orientation === 1 ? imagePadding : 0,
        marginBottom: orientation === 1 ? imagePadding : 0,
        // стили для ландшафтной ориентации
        marginLeft: orientation === 1 ? 0 : imagePadding,
        marginRight: orientation === 1 ? 0 : imagePadding,
      }}>
        {!photo ? (
          <Camera
            onCameraReady={setCameraReady}
            ref={ref => setCamera(ref)}
            style={styles.camera}
            type={type}
            flashMode={flash}
            ratio={ratio}
          >
            <View style={{
              ...styles.cameraBorder,
              borderColor: orientation !== 1 ? 'transparent' : colors.grey
            }}></View>
          </Camera>
        ) : (
          <View style={styles.previewContainer}>
            <Image
              style={{
                borderRadius: 8,
                width: photoWidth,
                height: photoHeight,
              }}
              source={{ uri: photo }}
            // source={photo}
            />
          </View>
        )}

        {!photo ? (
          <View style={orientation === 1 ? styles.blockBtnPortret : styles.blockBtnHorizont}>

            <BtnToggleFlashPhoto
              toggleFlash={toggleFlash}
              flash={flash}
            />
            <BtnCreatePhoto takePhoto={takePhoto} />
            <BtnToglleTypePhoto toggleCamera={toggleCameraType} />
          </View>
        ) : (
          <View style={orientation === 1 ? styles.blockBtnPortret : styles.blockBtnHorizont}>
            <BtnReshootPhoto reshootPhoto={reshootPhoto} />
            <BtnAddPhoto addPhoto={addPhoto} />
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
  },
  camera: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  cameraBorder: {
    height: 240,
    marginHorizontal: 16,
    marginVertical: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  previewContainer: {
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
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