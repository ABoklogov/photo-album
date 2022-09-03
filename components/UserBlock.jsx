import {
  StyleSheet,
  View,
} from "react-native";
import UserPhoto from "components/shared/UserPhoto";
import UserName from "components/shared/UserName";

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