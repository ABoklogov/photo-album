import {
  StyleSheet,
  View,
  Image,
} from "react-native";
import UserName from "components/shared/UserName";
import users from 'bd/users';
import { images } from 'res/vars.js';

export default UserBlock = ({ idUser }) => {
  // достаем данные конкретного юзера
  const { nameUser, emailUser, avatarUser } = users.find(el => el.id === idUser);

  return (
    <View style={styles.userBlock}>
      <View style={styles.photoBlock}>
        <Image
          style={styles.photo}
          source={avatarUser ? avatarUser : images.defaultAvatar}
        />
      </View>

      <UserName
        name={nameUser}
        email={emailUser}
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