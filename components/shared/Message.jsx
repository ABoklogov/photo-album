import {
  StyleSheet,
  Text
} from "react-native";
import { colors } from 'res/vars.js';

export default Message = ({ message }) => {
  return (
    <Text style={styles.message}>{message}</Text>
  )
};

const styles = StyleSheet.create({
  message: {

  },
});