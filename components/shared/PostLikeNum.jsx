import {
  StyleSheet,
  View,
  Text
} from "react-native";
import Like from 'icons/Like';
import { colors, fonts, sizeText } from 'res/vars.js';

export default PostLikeNum = ({ amountLikes }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Like amountLikes={amountLikes} />
      </View>
      <Text style={styles.textComments}>{amountLikes}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 9,
  },
  textComments: {
    fontFamily: fonts.medium,
    fontStyle: 'normal',
    fontSize: sizeText.normal,
    lineHeight: 19,
    color: colors.black,
  }
});
