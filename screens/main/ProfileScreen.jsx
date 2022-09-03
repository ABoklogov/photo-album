// import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

import Background from 'components/shared/Background';
import Title from 'components/shared/Title';
import Avatar from 'components/Avatar';
import BtnLogOut from 'components/shared/BtnLogOut';
import PostPhoto from 'components/shared/PostPhoto';
import { images, colors } from 'res/vars.js';

export default ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Background image={images.background}>
        <View style={styles.wrapper}>
          <Avatar />

          <View style={styles.btnLogOut}>
            <BtnLogOut />
          </View>

          <Title title={'Natali Romanova'} />

          <View style={styles.postList}>
            <View style={styles.postItem}>
              <PostPhoto />
            </View>
            <View style={styles.postItem}>
              <PostPhoto />
            </View>
            <View style={styles.postItem}>
              <PostPhoto />
            </View>
          </View>
        </View>
      </Background>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    marginTop: 147,
    paddingTop: 92,
    paddingBottom: 43,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  btnLogOut: {
    position: 'absolute',
    right: 16,
    top: 22,
  },
  postList: {
    marginHorizontal: 16,
    marginTop: 33,
  },
  postItem: {
    marginTop: 32,
  }
});