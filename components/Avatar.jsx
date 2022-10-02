import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import AddAvatar from 'icons/AddAvatar';
import { colors } from 'res/vars.js';

export default Avatar = ({ avatar }) => {
  const [isAddAvatar, setIsAddAvatar] = useState(false);

  useEffect(() => {
    avatar ? setIsAddAvatar(true) : setIsAddAvatar(false)
  }, [avatar]);

  const addAvatar = () => {
    setIsAddAvatar(!isAddAvatar);
  };

  return (
    <View style={styles.avatarBlock}>
      {avatar &&
        <Image
          style={styles.photo}
          source={avatar}
        />}
      <TouchableOpacity
        // меняем стили кнопки взависимовти от того добавлен ли аватар или нет:
        style={isAddAvatar ? {
          ...styles.btnAvatar,
          transform: [
            { translateX: -13 },
            { translateY: 0 },
            { rotate: '45deg' },
          ],
        } : styles.btnAvatar}
        activeOpacity={0.8}
        onPress={addAvatar}
      >
        <AddAvatar color={isAddAvatar ? colors.grey : colors.green} />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  avatarBlock: {
    position: 'absolute',
    left: '50%',
    transform: [
      { translateX: -60 },
      { translateY: -60 },
    ],
    backgroundColor: colors.lightGrey,
    height: 120,
    width: 120,
    borderRadius: 16,

  },
  btnAvatar: {
    position: 'absolute',
    bottom: 14,
    left: '100%',
    transform: [
      { translateX: -13 },
      { translateY: 0 },
    ],
    height: 25,
    width: 25,
  },
  photo: {
    borderRadius: 16,
    height: '100%',
    width: '100%',
  }
})