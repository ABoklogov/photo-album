import { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import AddAvatar from '../components/icons/AddAvatar';

const Avatar = () => {
  const [isAddAvatar, setIsAddAvatar] = useState(false);

  const addAvatar = () => {
    setIsAddAvatar(!isAddAvatar);
  };

  return (
    <View style={styles.avatarBlock}>
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
        <AddAvatar color={isAddAvatar ? '#BDBDBD' : '#56C330'} />
      </TouchableOpacity>
    </View>
  )
};

export default Avatar;

const styles = StyleSheet.create({
  avatarBlock: {
    position: 'absolute',
    left: '50%',
    transform: [
      { translateX: -60 },
      { translateY: -60 },
    ],
    backgroundColor: '#F6F6F6',
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
})