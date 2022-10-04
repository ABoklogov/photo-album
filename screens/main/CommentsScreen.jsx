import { useRef } from 'react';
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
import CommentsForm from 'components/CommentsForm';
import { colors } from 'res/vars.js';

export default CommentsScreen = ({ navigation, route }) => {
  const scrollRef = useRef();

  return (
    <View style={styles.wrapper}>
      <SafeAreaView>
        <ScrollView
          ref={scrollRef}
        >
          <View style={styles.container}>
            <PostPhoto image={route.params.image} />

            <View style={styles.commentsList}>
              <CommentsList comments={route.params.comments} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.footer}>
        <CommentsForm scrollEnd={() => scrollRef.current.scrollToEnd()} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
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
    paddingBottom: 83,
  },
  footer: {
    position: 'absolute',
    bottom: -1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
    width: '100%',
  }
});