import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
// import Header from "../../components/Header";

const PostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Header navigation={navigation} /> */}
    </View>
  )
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
});