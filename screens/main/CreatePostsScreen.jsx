import {
  StyleSheet,
  View,
  Text,
} from "react-native";

const CreatePostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
    </View>
  )
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: 'center',
  },
});