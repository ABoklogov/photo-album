import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import PostItem from 'components/PostItem';
import UserBlock from 'components/UserBlock';
import posts from 'bd/posts.js';
import { colors } from 'res/vars.js';

export default AllPostsList = () => {
  let prevId = '';

  const renderItem = ({ item }) => {
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
  };

  return (
    <SafeAreaView style={styles.postList}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  postList: {
    position: 'relative',
    height: '100%',
    backgroundColor: colors.white,
  },
  userBlockPosition: {
    marginBottom: 15,
  },
  item: {
    // paddingTop: 33,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 32,
  }
});