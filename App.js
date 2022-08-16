import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';

// подключение шрифтов
const loadFonts = async () => {
  await Font.loadAsync({
    'GothamPro-Light': require('./assets/fonts/GotmanPro/GothamPro-Light.ttf'),
    'GothamPro-Medium': require('./assets/fonts/GotmanPro/GothamPro-Medium.ttf'),
    'GothamPro-Bold': require('./assets/fonts/GotmanPro/GothamPro-Bold.ttf'),
    'GothamPro-Black': require('./assets/fonts/GotmanPro/GothamPro-Black.ttf'),
  })
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // компонент лоадер, пока шрифты подключаются
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text style={{ 'fontFamily': 'GothamPro-Bold' }}>frfregfre</Text>
      {/* <LoginScreen/> */}
      {/* <RegistrationScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: 'center',
  },
});
