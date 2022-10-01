import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import CommentsIcon from 'icons/CommentsIcon';
import { colors, fonts, sizeText } from 'res/vars.js';

export default PostCommentsNum = ({
  amountComments,
  image,
  comments
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Comments', { image, comments })}
    >
      <View style={styles.container}>
        <View style={styles.icon}>
          <CommentsIcon amountComments={amountComments} />
        </View>
        <Text style={styles.textComments}>{amountComments}</Text>
      </View>
    </TouchableOpacity>
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
