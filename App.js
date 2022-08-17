import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import useFonts from './hooks/useFonts';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // --- подключение шрифтов start---
  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  };
  // --- подключение шрифтов end---

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <LoginScreen /> */}
      <RegistrationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: "center",
    // alignItems: 'center',
  },
});
