import {
  Dimensions,
  ImageBackground,
} from "react-native";

export default Background = ({ image, children }) => {
  // определяем высоту экрана и задаем ее бекграенду
  const height = Dimensions.get('window').height;

  return (
    <ImageBackground
      source={image}
      style={{ height }}
    >
      {children}
    </ImageBackground>
  )
};