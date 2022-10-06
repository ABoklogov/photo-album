import { useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  LogBox
} from "react-native";
import PostItem from 'components/PostItem';
import UserBlock from 'components/UserBlock';
import posts from 'bd/posts.js';

export default AllPostsList = () => {
  // для удаление ошибки вложенных скроллов друг в друга
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, []);

  let prevId = '';

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          let showUserBlock = true;
          // проверяем совпадает ли предыдущий автор поста с текущим, если совпадает, то не показываем UserBlock
          if (prevId === item.idUser) {
            showUserBlock = false;
          } else {
            prevId = item.idUser;
          };

          return (
            <View style={styles.item}>
              {showUserBlock &&
                <View style={styles.userBlockPosition}>
                  <UserBlock idUser={item.idUser} />
                </View>}

              <PostItem
                name={item.name}
                amountLikes={item.amountLikes}
                image={item.image}
                location={item.location}
                comments={item.comments}
              />
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  userBlockPosition: {
    marginBottom: 15,
  },
  item: {
    marginBottom: 32,
  }
});