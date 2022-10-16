import { useState } from 'react';
import {
  StyleSheet,
  View,
} from "react-native";
import BtnCreatePhoto from 'components/shared/BtnCreatePhoto';
import { Camera } from 'expo-camera';
import { colors } from 'res/vars.js';

export default CreatePostPhoto = () => {
  // const [isCameraReady, setIsCameraReady] = useState(false);
  const [camera, setCamera] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);


  // const onCameraReady = () => {
  //   console.log(333);
  //   setIsCameraReady(true);
  // };

  const takePhoto = async () => {
    try {
      console.log("🚀 camera", camera.takePictureAsync())

    } catch (error) {
      console.log("🚀 ~ takePhoto ~ error", error)

    }

  };

  return (
    <View style={styles.container}>
      <Camera
        ref={setCamera}
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