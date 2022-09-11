import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import PostItem from 'components/PostItem';
import { colors, fonts, sizeText } from 'res/vars.js';

const posts = [
  {
    id: 111,
    name: 'Лес',
    amountComments: 8,
    amountLikes: 123,
    image: require('assets/images/posts/post2.jpg')
  },
  {
    id: 222,
    name: 'Закат на Черном море',
    amountComments: 1,
    amountLikes: 24,
    image: require('assets/images/posts/post1.jpg')
  },
  {
    id: 333,
    name: 'Старый домик в Венеции',
    amountComments: 4,
    amountLikes: 77,
    image: require('assets/images/posts/post3.jpg')
  },
]
export default PostsList = () => {

  return (
    <View style={styles.container}>
      {posts.map(({
        id,
        name,
        amountComments,
        amountLikes,
        image
      }) => (
        <View key={id} style={styles.item}>
          <PostItem
            name={name}
            amountComments={amountComments}
            amountLikes={amountLikes}
            image={image}
          />
        </View>
      ))}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
  },
  item: {
    marginBottom: 32,
  }
});