import {
  StyleSheet,
  View,
  Text
} from "react-native";

import { images, colors } from 'res/vars.js';


export default CommentsMaster = ({ text, date, time }) => {
  console.log("🚀 ~ time", time)
  console.log("🚀 ~ date", date)
  console.log("🚀 ~ text", text)


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