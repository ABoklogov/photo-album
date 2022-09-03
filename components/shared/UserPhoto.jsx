import {
  StyleSheet,
  View,
  Image,
} from "react-native";
const avatar = require('assets/images/avatars/avatar.jpg');

export default UserPhoto = () => {
  return (
    <View style={styles.photo}>
      <Image source={avatar} />
    </View>
  )
};

const styles = StyleSheet.create({
  photo: {
    borderRadius: 16,
    visibility: 'hidden',
    marginRight: 8,
  },
});