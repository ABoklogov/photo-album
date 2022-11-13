import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import useFonts from 'hooks/useFonts';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// console.log("🚀 ~ store", store)
import { NavigationContainer } from '@react-navigation/native';
import useRoute from 'router/router';

SplashScreen.preventAutoHideAsync(); // для шрифтов

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);

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
    <Provider store={store}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          {routing}
        </NavigationContainer>
      </View>
    </Provider>
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
