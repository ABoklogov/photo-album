import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    "gothampro_bold": require("../assets/fonts/gothampro_bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });