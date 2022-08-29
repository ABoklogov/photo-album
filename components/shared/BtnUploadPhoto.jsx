import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

export default BtnUploadPhoto = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
    >
      <Text style={styles.text}>
        Загрузите фото
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'GothamPro-Medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
});