import {
  StyleSheet,
  Text,
} from "react-native";

export default Title = ({ title }) => {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  )
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'GothamPro-Bold',
    fontSize: 30,
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#212121',
  },
});