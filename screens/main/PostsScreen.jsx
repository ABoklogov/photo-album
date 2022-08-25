import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import UserBlock from "../../components/UserBlock";

const PostsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.userBlockPosition}>
        <UserBlock />
      </View>
    </ScrollView>
  )
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    backgroundColor: '#fff',
  },
  userBlockPosition: {
    marginBottom: 32,
  },
});