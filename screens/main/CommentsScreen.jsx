import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import PostPhoto from 'components/shared/PostPhoto';
import CommentsList from 'components/CommentsList';
import { colors } from 'res/vars.js';

export default CommentsScreen = ({ navigation, route }) => {
  return (
    // <TouchableWithoutFeedback onPress={removesKeyboard}>
    <SafeAreaView>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <PostPhoto image={route.params.image} />

            <View style={styles.commentsList}>
              <CommentsList comments={route.params.comments} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    // </TouchableWithoutFeedback >
  )
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 16,
    paddingTop: 32,
  },
  commentsList: {
    marginTop: 32,
  }
});