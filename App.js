import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import useFonts from './hooks/useFonts';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import HomeScreen from './screens/HomeScreen';

SplashScreen.preventAutoHideAsync(); // для шрифтов
const MainStack = createStackNavigator(); // указывает на группу навигаторов

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
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <MainStack.Navigator initialRouteName='Login'>
          <MainStack.Screen name='Registration' component={RegistrationScreen} />
          <MainStack.Screen name='Login' component={LoginScreen} />
          <MainStack.Screen name='Home' component={HomeScreen} />
        </MainStack.Navigator>
      </View>
    </NavigationContainer>
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
