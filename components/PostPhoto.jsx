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
    justifyContent: "center",
    alignItems: 'center',
    height: 240,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
});