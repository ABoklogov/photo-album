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

const posts = [
  {
    id: 111,
    name: 'Лес',
    amountComments: 8,
    amountLikes: 123,
    image: require('assets/images/posts/post2.jpg'),
    location: 'Russia',
    comments: [
      {
        id: 'm4kto34o5nm',
        isMaster: false,
        text: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
        date: '09 июня, 2020',
        time: '08:40',
      },
      {
        id: 'dk348nfgeri',
        isMaster: true,
        text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
        date: '09 июня, 2020',
        time: '09:14',
      },
      {
        id: 'flwp489fhui',
        isMaster: false,
        text: 'Thank you! That was very helpful!',
        date: '09 июня, 2020',
        time: '09:20',
      },
    ],
  },
  {
    id: 222,
    name: 'Закат на Черном море',
    amountComments: 1,
    amountLikes: 24,
    image: require('assets/images/posts/post1.jpg'),
    location: 'USA',
  },
  {
    id: 333,
    name: 'Старый домик в Венеции',
    amountComments: 4,
    amountLikes: 77,
    image: require('assets/images/posts/post3.jpg'),
    location: 'Chine',
  },
];

export default PostsList = () => {
  // для удаление ошибки вложенных скроллов друг в друга
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <PostItem
              name={item.name}
              amountComments={item.amountComments}
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
