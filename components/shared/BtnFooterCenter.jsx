import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

export default BtnFooterCenter = ({ background, children }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: background }}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('CreatePosts')}
    >
      {children}
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    "height": 40,
    "width": 70,
    "borderRadius": 20,
  },
});
