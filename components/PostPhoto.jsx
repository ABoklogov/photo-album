import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import BtnCreatePhoto from './shared/BtnCreatePhoto';

export default PostPhoto = () => {
  return (
    <ImageBackground
      style={styles.container}
    // source={image}
    >
      <BtnCreatePhoto />
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 16,
    justifyContent: "center",
    alignItems: 'center',
    // width: 343,
    width: '100%',
    height: 240,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
});