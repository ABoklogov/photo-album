// import { useNavigation } from "@react-navigation/native";
import { useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import AllPostsList from "components/AllPostsList";
import { colors } from 'res/vars.js';

export default PostsScreen = ({ route }) => {
  const offOrientation = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  };
  // выключаем поворот экрана
  useEffect(() => {
    offOrientation();
  }, []);

  return (
    <View style={styles.container}>
      <AllPostsList />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  }
});