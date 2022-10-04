// import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";

import Background from 'components/shared/Background';
import Title from 'components/shared/Title';
import Avatar from 'components/Avatar';
import BtnLogOut from 'components/shared/BtnLogOut';
import PostsList from 'components/PostsList';
import { images, colors } from 'res/vars.js';
import data from 'bd/data.js';

export default ProfileScreen = ({ navigation }) => {
  return (
    <Background image={images.background}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.wrapper}>
            <Avatar avatar={data.avatarUser} />

            <View style={styles.btnLogOut}>
              <BtnLogOut />
            </View>

            <Title title={data.nameUser} />

            <View style={styles.postList}>
              <PostsList />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
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
    paddingBottom: 33,
  },
  // postItem: {
  //   marginTop: 32,
  // }
});