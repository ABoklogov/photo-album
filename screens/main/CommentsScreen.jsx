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
    <View style={styles.wrapper}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <PostPhoto image={route.params.image} />

            <View style={styles.commentsList}>
              <CommentsList comments={route.params.comments} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
    // </TouchableWithoutFeedback >
  )
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: '100%',
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