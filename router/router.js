import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from '@react-navigation/elements';
const AuthStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();
const NotTabsStack = createStackNavigator();

// import icons
import PostsGrid from 'icons/PostsGrid';
import Profile from 'icons/Profile';
// import components
import Header from 'components/Header';
import BtnCreatePost from "components/shared/BtnCreatePost";
// import screens
import LoginScreen from 'screens/auth/LoginScreen';
import RegistrationScreen from 'screens/auth/RegistrationScreen';
import PostsScreen from 'screens/main/PostsScreen';
import CreatePostsScreen from 'screens/main/CreatePostsScreen';
import ProfileScreen from 'screens/main/ProfileScreen';
import CommentsScreen from 'screens/main/CommentsScreen';
import MapScreen from 'screens/main/MapScreen';
import CameraScreen from 'screens/main/CameraScreen';

import { strings } from 'res/vars.js';

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

  // приватная навигайия
  const StubComponent = () => <></>; // <-- компонент заглушка

  // навигация с нижними табами
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
            title: strings.headerTitlePosts,
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
            title: strings.headerTitleCreatePosts,
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

  // навигация без нижних табов
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
          title: strings.headerTitleCreatePosts,
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <Header title={title} navigation={navigation} />;
          },
        }}
      />
      <NotTabsStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: strings.headerTitleComments,
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <Header title={title} navigation={navigation} />;
          },
        }}
      />
      <NotTabsStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: strings.headerTitleMap,
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <Header title={title} navigation={navigation} />;
          },
        }}
      />
      <NotTabsStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerShown: false,
          // title: strings.headerTitleCamera,
          // header: ({ navigation, route, options }) => {
          //   const title = getHeaderTitle(options, route.name);
          //   return <Header title={title} navigation={navigation} />;
          // },
        }}
      />
    </NotTabsStack.Navigator>
  )
}; 