import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import UserBlock from "components/UserBlock";
import { colors } from 'res/vars.js';
import data from 'res/data.js';
// import BtnFooterCenter from 'components/shared/BtnFooterCenter';
// import CreateIcon from 'components/icons/CreateIcon';

export default PostsScreen = () => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userBlockPosition}>
        <UserBlock
          avatar={data.avatarUser}
          name={data.nameUser}
          email={data.emailUser}
        />
      </View>
    </ScrollView>
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
  userBlockPosition: {
    marginBottom: 32,
  },
  // btnFooter: {
  //   position: 'absolute',
  //   bottom: -12,
  // },
});