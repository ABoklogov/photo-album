import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useFonts from './hooks/useFonts';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import AppLoading from 'expo-app-loading';

// подключение шрифтов
const loadFonts = async () => {
  await useFonts();
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={err => console.warn(err)}
      />
    )
  };

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