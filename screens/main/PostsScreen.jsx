import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import AllPostsList from "components/AllPostsList";
import { colors } from 'res/vars.js';

export default PostsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.postList}>
          <AllPostsList />
        </View>
      </ScrollView>
    </SafeAreaView>

  )
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    backgroundColor: colors.white,
  },
  postList: {
    paddingBottom: 33,
  }
});