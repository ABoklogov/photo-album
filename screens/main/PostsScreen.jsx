import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

import UserBlock from "components/UserBlock";
// import BtnFooterCenter from 'components/shared/BtnFooterCenter';
// import CreateIcon from 'components/icons/CreateIcon';

const PostsScreen = () => {

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
    position: 'relative',
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
  // btnFooter: {
  //   position: 'absolute',
  //   bottom: -12,
  // },
});