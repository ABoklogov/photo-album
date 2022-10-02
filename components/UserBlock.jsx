import {
  StyleSheet,
  View,
  Image,
} from "react-native";

import UserName from "components/shared/UserName";

export default UserBlock = ({ avatar, name, email }) => {
  return (
    <View style={styles.userBlock}>
      <View style={styles.photoBlock}>
        <Image
          style={styles.photo}
          source={avatar}
        />
      </View>

      <UserName
        name={name}
        email={email}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  userBlock: {
    flex: 1,
    flexDirection: 'row',
  },
  photoBlock: {
    marginRight: 8,
    height: 60,
    width: 60,
  },
  photo: {
    borderRadius: 16,
    height: '100%',
    width: '100%',
  },
});