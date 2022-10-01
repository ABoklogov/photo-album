import {
  StyleSheet,
  View,
  Text
} from "react-native";

import { images, colors } from 'res/vars.js';


export default CommentsGuest = ({ text, date, time }) => {

  return (
    <View>
      <Text>{text}</Text>
      <Text>{date}</Text>
      <Text>{time}</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});