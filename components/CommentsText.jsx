import {
  StyleSheet,
  View,
  Text
} from "react-native";
import { fonts, colors, sizeText } from 'res/vars.js';

export default CommentsText = ({
  text,
  date,
  time,
  isMaster,
}) => {
  return (
    <View style={{
      ...styles.container,
      borderTopLeftRadius: isMaster ? 6 : 0,
      borderTopRightRadius: isMaster ? 0 : 6,
    }}>
      <View style={styles.textBox}>
        <Text style={styles.text}>{text}</Text>
      </View>

      <Text style={{
        ...styles.date,
        textAlign: isMaster ? 'left' : 'right',
      }}>
        {date} | {time}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.lightGrey,
    borderRadius: 6,
    width: '85%',
  },
  textBox: {
    marginBottom: 8,
  },
  text: {
    fontFamily: fonts.medium,
    fontStyle: 'normal',
    fontSize: sizeText.light,
    lineHeight: 18,
    color: colors.black,
  },
  date: {
    fontFamily: fonts.medium,
    fontStyle: 'normal',
    fontSize: sizeText.micro,
    lineHeight: 12,
    color: colors.grey,
  }
});
