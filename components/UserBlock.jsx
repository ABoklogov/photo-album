import {
  StyleSheet,
  View,
  Image,
} from "react-native";

import UserName from "components/shared/UserName";
import { images } from 'res/vars.js';

export default UserBlock = () => {
  return (
    <View style={styles.userBlock}>
      <Image
        style={styles.photo}
        source={images.avatar}
      />
      <UserName />
    </View>
  )
};

const styles = StyleSheet.create({
  userBlock: {
    flex: 1,
    flexDirection: 'row',
  },
  photo: {
    borderRadius: 16,
    marginRight: 8,
    height: 60,
    width: 60,
  },
});