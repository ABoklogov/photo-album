import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import UserPhoto from "./shared/UserPhoto";
import UserName from "./shared/UserName";

export default UserBlock = () => {
  return (
    <View style={styles.userBlock}>
      <UserPhoto />
      <UserName />
    </View>
  )
};

const styles = StyleSheet.create({
  userBlock: {
    flex: 1,
    flexDirection: 'row',
  },
});