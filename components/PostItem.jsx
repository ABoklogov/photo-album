import {
  StyleSheet,
  View,
  Text
} from "react-native";
import PostPhoto from 'components/shared/PostPhoto';
import PostCommentsNum from 'components/shared/PostCommentsNum';
import PostLikeNum from 'components/shared/PostLikeNum';
import { colors, fonts, sizeText } from 'res/vars.js';

export default PostItem = ({
  name,
  amountComments,
  amountLikes,
  image
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <PostPhoto image={image} />
      </View>

      <Text style={styles.textComments}>{name}</Text>

      <View style={styles.footerPost}>
        <View style={styles.comments}>
          <PostCommentsNum amountComments={amountComments} />
        </View>
        <PostLikeNum amountLikes={amountLikes} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {

  },
  photo: {
    marginBottom: 8,
  },
  footerPost: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  comments: {
    marginRight: 24,
  },
  textComments: {
    fontFamily: fonts.medium,
    fontStyle: 'normal',
    fontSize: sizeText.normal,
    lineHeight: 19,
    color: colors.black,
  }
});
