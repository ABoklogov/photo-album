import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import Footer from '../../components/Footer';

const CreatePostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen111</Text>
      <Footer />
    </View>
  )
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: 'center',
  },
});