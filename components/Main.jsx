import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import useRoute from 'router/router';
import { stateChangeUser } from 'store/user/userOperations'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Message from 'components/shared/Message';
import { strings } from 'res/vars.js';

export default Main = () => {
  const { stateChange } = useSelector(state => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const routing = useRoute(stateChange);
  // console.log(state);

  useEffect(() => {
    // проверяем зашедшего юзера
    dispatch(stateChangeUser());

  }, [stateChange]);

  // if (!isLoading) {
  //   return (
  //     <View style={styles.container}>
  //       <Message message={strings.loading} />
  //     </View>
  //   )
  // } else {
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  )
  // };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  }
});