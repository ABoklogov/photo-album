import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { colors, fonts, sizeText } from 'res/vars.js';

const { name, email } = {
  name: 'Natali Romanova',
  email: 'email@example.com',
};

export default UserName = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      <Text style={styles.email}>
        {email}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: sizeText.light,
    lineHeight: 15,
    fontStyle: 'normal',
    color: colors.black,
  },
  email: {
    fontFamily: fonts.medium,
    fontSize: sizeText.mini,
    lineHeight: 13,
    fontStyle: 'normal',
    color: colors.darkGrey,
  },
});