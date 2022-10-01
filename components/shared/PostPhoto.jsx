import {
  StyleSheet,
  Image
} from "react-native";
import { colors } from 'res/vars.js';

export default PostPhoto = ({ image }) => {
  return (
    <Image
      style={styles.container}
      source={image}
    >
    </Image>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: 'center',
    height: 240,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: 8,
    backgroundColor: colors.lightGrey,
  },
});