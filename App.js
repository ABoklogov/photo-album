import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';

import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFonts';
import * as Font from "expo-font";
// import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  // (1)
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  // (2)
  // const [isReady, setIsReady] = useState(false);
  // const loadFonts = async () => {
  //   await useFonts();
  // }
  // // console.log(loadFonts);
  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setIsReady(true)}
  //       onError={err => console.log(err)}
  //     />
  //   );
  // }
  // (3)
  // const [fontsLoaded] = useFonts({
  //   "gothampro_bold": require("./assets/fonts/gothampro_bold.ttf"),
  //   "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  //   "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  //   "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  // });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <Text style={{ fontFamily: 'gothampro_bold' }}>Привет</Text>
      {/* <LoginScreen /> */}
      {/* <RegistrationScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  },
});
