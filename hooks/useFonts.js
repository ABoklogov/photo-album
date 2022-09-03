import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    'GothamPro-Light': require('assets/fonts/GotmanPro/GothamPro-Light.ttf'),
    'GothamPro-Medium': require('assets/fonts/GotmanPro/GothamPro-Medium.ttf'),
    'GothamPro-Bold': require('assets/fonts/GotmanPro/GothamPro-Bold.ttf'),
    'GothamPro-Black': require('assets/fonts/GotmanPro/GothamPro-Black.ttf'),
  });