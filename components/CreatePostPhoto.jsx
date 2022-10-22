import { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Camera, CameraType } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import BtnCreatePhoto from 'components/shared/BtnCreatePhoto';
import BtnToglleTypePhoto from 'components/shared/BtnToglleTypePhoto';
import BtnSizeCamera from 'components/shared/BtnSizeCamera';
import Message from 'components/shared/Message';
import { colors, strings } from 'res/vars.js';

export default CreatePostPhoto = () => {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [type, setType] = useState(CameraType.back);
  const [bigCamera, setBigCamera] = useState(false);
  const [photo, setPhoto] = useState();

  console.log("🚀 ~ hasCameraPermission", hasCameraPermission)
  console.log("🚀 ~ hasMediaLibraryPermission", hasMediaLibraryPermission)
  console.log("🚀 ~ type", type)
  console.log("🚀 ~ bigCamera", bigCamera)
  console.log("🚀 ~ photo", photo)

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
        <Message message={strings.permissionRequest} />
      </View>
    )
  } else if (!hasCameraPermission) {
    return (
      <View style={styles.container}>
        <Message message={strings.noPermission} />
      </View>
    )
  }

  const takePhoto = async () => {
    let options = {
      quality: 1,
      // base64: true,
      exif: false
    };
    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto.uri);
  };
  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const toggleSizeCamera = () => {
    setBigCamera(!bigCamera);
  }
  // if (photo) {
  //   let sharePic = () => {
  //     shareAsync(photo.uri).then(() => {
  //       setPhoto(undefined);
  //     });
  //   };

  //   let savePhoto = () => {
  //     MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
  //       setPhoto(undefined);
  //     });
  //   };

  //   return (
  //     <SafeAreaView style={styles.previewContainer}>
  //       <Image
  //         style={styles.preview}
  //         source={{ uri: "data:image/jpg;base64," + photo.base64 }}
  //       />
  //       <Button
  //         title="Share"
  //         onPress={sharePic}
  //       />
  //       {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
  //       <Button
  //         title="Discard"
  //         onPress={() => setPhoto(undefined)}
  //       />
  //     </SafeAreaView>
  //   );
  // }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={type}
      >
        {photo &&
          <View style={styles.preview}>
            <Image
              style={styles.image}
              source={{ uri: photo }}
            />
          </View>}

        {!photo &&
          <View style={styles.btnTake}>
            <BtnCreatePhoto takePhoto={takePhoto} />
          </View>}
        {!photo &&
          <View style={styles.btnToggleCamera}>
            <BtnToglleTypePhoto toggleCamera={toggleCameraType} />
          </View>}
        {!photo &&
          <View style={styles.btnSizeCamera}>
            <BtnSizeCamera toggleSizeCamera={toggleSizeCamera} />
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
  },
  preview: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    height: 240,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  btnTake: {
    position: 'absolute',
    zIndex: -1,
    // justifyContent: "center",
    // alignItems: 'center',
  },
  btnToggleCamera: {
    position: 'absolute',
    bottom: 70,
    right: 15,
    zIndex: -1,
  },
  btnSizeCamera: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    zIndex: -1,
  }
});