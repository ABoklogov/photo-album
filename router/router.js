import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const AuthStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

// import icons
import { AntDesign } from '@expo/vector-icons';
import PostsGrid from '../components/icons/PostsGrid';
import Profile from '../components/icons/Profile';
import CreateIcon from '../components/icons/CreateIcon';
import BtnFooterCenter from '../components/shared/BtnFooterCenter';

import LoginScreen from '../screens/auth/LoginScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen';
import PostsScreen from '../screens/main/PostsScreen';
import CreatePostsScreen from '../screens/main/CreatePostsScreen';
import ProfileScreen from '../screens/main/ProfileScreen';

export default useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen
          name='Registration'
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name='Post'
          component={PostsScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    )
  }

  return (
    <MainTabs.Navigator
      initialRouteName='Posts'
      screenOptions={{
        "tabBarShowLabel": false,
        "tabBarStyle": [
          {
            "height": 83,
            "paddingLeft": 90,
            "paddingRight": 90,
            "paddingBottom": 34,
            "paddingTop": 9,
          },
          null
        ],
      }}
    >
      <MainTabs.Screen
        name='Posts'
        component={PostsScreen}
        options={{
          // headerShown: false,
          title: 'Публикации',
          headerTitleStyle: {
            fontFamily: 'GothamPro-Medium',
            fontSize: 17,
            lineHeight: 22,
            fontStyle: 'normal',
            // textAlign: 'center',
          },
          headerTintColor: '#212121',
          headerStyle: {
            height: 88,
            // flex: 1,
            // alignItems: 'center',
            // justifyContent: "center",
            // paddingTop: 55,
            // paddingBottom: 11,
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5E5',
          },

          tabBarIcon: () => <PostsGrid />
        }}
      />
      <MainTabs.Screen
        name='CreatePosts'
        component={CreatePostsScreen}
        options={{
          // headerShown: false,
          tabBarIcon: () => (
            <BtnFooterCenter background={'#56C330'} >
              <CreateIcon />
            </BtnFooterCenter>
          )
        }}
      />
      <MainTabs.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          // headerShown: false,
          tabBarIcon: () => <Profile />
        }}
      />
    </MainTabs.Navigator>
  )
}; 