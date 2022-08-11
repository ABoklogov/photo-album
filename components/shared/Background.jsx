import {
  Dimensions,
  ImageBackground,
} from "react-native";

const Background = ({ image, children }) => {
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

export default Background;