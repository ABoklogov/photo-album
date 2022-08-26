import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from '@react-navigation/elements';
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
import Header from '../components/Header';
import BtnLogOut from '../components/shared/BtnLogOut';

export default useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      // публичная навигация
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
  };

  // приватная навигация
  return (
    <MainTabs.Navigator
      initialRouteName='Posts'
      screenOptions={({ route, navigation }) => {
        console.log("🚀 ~ navigation", navigation)
        console.log("🚀 ~ route", route)
        if (route.name === 'CreatePosts') {

        }

        return {
          "tabBarShowLabel": false,
          // "tabBarActiveTintColor": "tomato",
          // "tabBarInactiveTintColor": "gray",
          // стили нижней навигации
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
        }
      }}
    >

      <MainTabs.Screen
        name='Posts'
        component={PostsScreen}
        options={{
          title: 'Публикации',
          // подключаем компонент Header
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <Header title={title} navigation={navigation} />;
          },
          tabBarIcon: () => <PostsGrid />
        }}
      />

      <MainTabs.Screen
        name='CreatePosts'
        component={CreatePostsScreen}
        options={{
          title: 'Создать публикацию',
          // подключаем компонент Header
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <Header title={title} navigation={navigation} />;
          },
          tabBarIcon: ({ navigation }) => (
            <BtnFooterCenter background={'#56C330'} navigation={navigation}>
              <CreateIcon />
            </BtnFooterCenter>
          ),
        }}
      />

      <MainTabs.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Profile />
        }}
      />
    </MainTabs.Navigator >
  )
}; 