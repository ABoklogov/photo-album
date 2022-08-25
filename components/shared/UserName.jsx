import {
  StyleSheet,
  View,
  Text,
} from "react-native";

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
    fontFamily: 'GothamPro-Bold',
    fontSize: 13,
    lineHeight: 15,
    fontStyle: 'normal',
    color: '#212121',
  },
  email: {
    fontFamily: 'GothamPro-Medium',
    fontSize: 11,
    lineHeight: 13,
    fontStyle: 'normal',
    color: '#767676',
  },
});