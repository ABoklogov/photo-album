import {
  Dimensions,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";

const Background = ({ image, children }) => {
  // определяем высоту экрана и задаем ее бекграенду
  const height = Dimensions.get('window').height;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={image}
        style={{ height }}
      >
        {children}
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
};

export default Background;