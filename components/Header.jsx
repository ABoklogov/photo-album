import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import BtnLogOut from './shared/BtnLogOut';
import BtnBack from "./shared/BtnBack";

export default Header = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>{title}</Text>

        {
          title === 'Публикации' &&
          <View style={styles.logOutBtn}>
            <BtnLogOut navigation={navigation} />
          </View>
        }

        {
          title === 'Создать публикацию' &&
          <View style={styles.backBtn}>
            <BtnBack navigation={navigation} />
          </View>
        }
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
  logOutBtn: {
    position: 'absolute',
    right: 10,
  },
  backBtn: {
    position: 'absolute',
    left: 16,
  },
})