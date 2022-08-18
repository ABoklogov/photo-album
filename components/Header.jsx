import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import BtnLogOut from './shared/BtnLogOut';

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Публикации</Text>
        <BtnLogOut navigation={navigation} />
      </View>
    </View>
  )
};

export default Header;

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    paddingTop: 55,
    paddingBottom: 11,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 17,
    lineHeight: 22,
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#212121',
  },
})