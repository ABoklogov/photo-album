import { StyleSheet, View, Text } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <LoginScreen/> */}
      <RegistrationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: "center",
  },
});
