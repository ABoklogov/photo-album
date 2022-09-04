import {
  StyleSheet,
  ImageBackground,
} from "react-native";
import BtnCreatePhoto from 'components/shared/BtnCreatePhoto';
import { colors } from 'res/vars.js';

export default CreatePostPhoto = () => {
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
    borderColor: colors.borderGrey,
    borderRadius: 8,
    backgroundColor: colors.lightGrey,
  },
});