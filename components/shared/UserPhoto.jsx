import {
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
const avatar = require('../../assets/images/avatars/avatar.jpg');

export default UserPhoto = () => {
  return (
    <View style={styles.photo}>
      <Image source={avatar} />
    </View>
  )
};

const styles = StyleSheet.create({
  photo: {
    marginRight: 8,
  },
});