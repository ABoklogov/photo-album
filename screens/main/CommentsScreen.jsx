import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { colors } from 'res/vars.js';

export default CommentsScreen = ({ navigation, route }) => {
  console.log('1', route.params.image);

  return (
    // <TouchableWithoutFeedback onPress={removesKeyboard}>
    <View style={styles.container}>
      <View>

      </View>
    </View>
    // </TouchableWithoutFeedback >
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 32,
    backgroundColor: colors.white,
  },
});