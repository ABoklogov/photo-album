import {
  StyleSheet,
  ImageBackground,
} from "react-native";
import { colors } from 'res/vars.js';

export default PostPhoto = () => {
  return (
    <ImageBackground
      style={styles.container}
    // source={image}
    >
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: 'center',
    height: 240,
    // marginHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: 8,
    backgroundColor: colors.lightGrey,
  },
});