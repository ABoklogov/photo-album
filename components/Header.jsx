import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import BtnLogOut from './shared/BtnLogOut';

export default Header = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {title === 'Публикации' && <BtnLogOut navigation={navigation} />}
      </View>
    </View>
  )
};

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