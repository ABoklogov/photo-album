import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';

import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFonts';
// import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       await useFonts();
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }
  const [isReady, setIsReady] = useState(false);
  const loadFonts = async () => {
    await useFonts();
  }
  // console.log(loadFonts);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
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
