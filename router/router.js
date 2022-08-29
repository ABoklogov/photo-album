import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from '@react-navigation/elements';
const AuthStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();
const NotTabsStack = createStackNavigator();

// import icons
import PostsGrid from '../components/icons/PostsGrid';
import Profile from '../components/icons/Profile';
import LoginScreen from '../screens/auth/LoginScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen';
import PostsScreen from '../screens/main/PostsScreen';
import CreatePostsScreen from '../screens/main/CreatePostsScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import Header from '../components/Header';
import BtnCreatePost from "../components/shared/BtnCreatePost";

export default useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      // публичная навигация
      <AuthStack.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false,
      }}>

        <AuthStack.Screen
          name='Registration'
          component={RegistrationScreen}
        />

        <AuthStack.Screen
          name='Login'
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    )
  };


  const StubComponent = () => <></>;

  const TabsStack = () => {
    return (
      <MainTabs.Navigator
        initialRouteName='Posts'
        screenOptions={{
          "tabBarShowLabel": false,
          // стили нижней навигации
          "tabBarStyle": [
            {
              "height": 83,
              "paddingLeft": 50,
              "paddingRight": 50,
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
          name='TabCreatePosts'
          component={StubComponent}
          options={{
            title: 'Создать публикацию',
            tabBarIcon: () => <BtnCreatePost />
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
      </MainTabs.Navigator>
    )
  };

  return (
    <NotTabsStack.Navigator
      initialRouteName='Home'
    >
      <NotTabsStack.Screen
        name="Home"
        component={TabsStack}
        options={{
          headerShown: false,
        }}
      />
      <NotTabsStack.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: 'Создать публикацию',
          // подключаем компонент Header
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <Header title={title} navigation={navigation} />;
          },
        }}
      />

    </NotTabsStack.Navigator>
  )
}; 