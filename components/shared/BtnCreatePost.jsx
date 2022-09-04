import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CreateIcon from 'icons/CreateIcon';
import { colors } from 'res/vars.js';

export default BtnCreatePost = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('CreatePosts')}
    >
      <CreateIcon />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 70,
    borderRadius: 20,
    backgroundColor: colors.green,
  },
});
