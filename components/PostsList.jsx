import { useEffect } from 'react';
import {
  StyleSheet,
  View,
  // Text,
  // ScrollView,
  SafeAreaView,
  FlatList,
  LogBox
} from "react-native";
import PostItem from 'components/PostItem';
// import { colors, fonts, sizeText } from 'res/vars.js';
import data from 'res/data.js';

export default PostsList = () => {
  // для удаление ошибки вложенных скроллов друг в друга
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data.posts}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <PostItem
              name={item.name}
              amountLikes={item.amountLikes}
              image={item.image}
              location={item.location}
              comments={item.comments}
            />
          </View>
        )}
      />
    </SafeAreaView>
  )
};
/* <View style={styles.container}>
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
    </View> */
const styles = StyleSheet.create({
  container: {
  },
  item: {
    marginBottom: 32,
  }
});
