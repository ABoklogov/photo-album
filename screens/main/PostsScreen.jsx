import { useNavigation } from "@react-navigation/native";
import { useEffect } from 'react';
import { StyleSheet } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import AllPostsList from "components/AllPostsList";

export default PostsScreen = ({ route }) => {
  const offOrientation = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  };
  // выключаем поворот экрана
  useEffect(() => {
    offOrientation();
  }, []);

  return (
    <AllPostsList />
  )
};

const styles = StyleSheet.create({
});