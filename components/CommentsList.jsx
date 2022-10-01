import { useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  LogBox
} from "react-native";
import CommentsGuest from 'components/CommentsGuest';
import CommentsMaster from 'components/CommentsMaster';
import { images, colors } from 'res/vars.js';

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
          item.isMaster
            ?
            <CommentsMaster
              text={item.text}
              date={item.date}
              time={item.time}
            />
            :
            <CommentsGuest
              text={item.text}
              date={item.date}
              time={item.time}
            />
        )}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({

});