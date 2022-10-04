import { useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  LogBox
} from "react-native";
import Comments from 'components/Comments';

export default CommentsList = ({ comments }) => {
  // для удаление ошибки вложенных скроллов друг в друга
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={comments}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Comments
              text={item.text}
              date={item.date}
              time={item.time}
              idUser={item.idUser}
            />
          </View>
        )}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  comment: {
    marginBottom: 24,
  },
});