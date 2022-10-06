import {
  StyleSheet,
  View,
  Image,
} from "react-native";
import CommentsText from "components/CommentsText";
import { images } from 'res/vars.js';
import users from 'bd/users.js';
import dataUser from 'bd/dataUser.js';

export default Comments = ({
  text,
  date,
  time,
  idUser,
}) => {
  const { avatarUser } = users.find(el => el.id === idUser);
  const isMaster = idUser === dataUser.id;

  return (
    <View style={{ flexDirection: isMaster ? 'row-reverse' : 'row' }}>
      <Image
        style={{
          ...styles.photo,
          marginRight: isMaster ? 0 : 16,
          marginLeft: isMaster ? 16 : 0,
        }}
        source={avatarUser ? avatarUser : images.defaultAvatar}
      />

      <CommentsText
        text={text}
        date={date}
        time={time}
        isMaster={isMaster}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  photo: {
    height: 28,
    width: 28,
    borderRadius: 28,
  }
});