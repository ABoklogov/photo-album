import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import useFonts from 'hooks/useFonts';
import { Provider } from 'react-redux';
import { store } from './store/index';
import './firebase/config'; // чтобы работало, нужно создать в корне проекта файл metro.config.js

import { StyleSheet, View } from 'react-native';
import Main from 'components/Main';

SplashScreen.preventAutoHideAsync(); // для шрифтов

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // --- подключение шрифтов start ---
  useEffect(() => {
    (async () => {
      try {
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      };
    })();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    };
  }, [isReady]);

  if (!isReady) {
    return null;
  };
  // --- подключение шрифтов end---

  return (
    <Provider store={store}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Main />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
