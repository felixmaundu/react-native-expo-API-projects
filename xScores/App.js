/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Homes,Favorites,Explores} from './src/navigation/CustomNavigation';
import {Ionicons,MaterialCommunityIcons,MaterialIcons} from "@expo/vector-icons";
//npm run android
//tmdb api key 53939b3da3d575c42c212fb77c52c5a5
// npx create-expo-app AwesomeProject
//npx expo start  //npm start
//npx expo install react-native-pager-view
// npx expo install react-native-reanimated@~2.12.0
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homes}  
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Favorite" component={Favorites} 
      options={{
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ color }) => (
          <Ionicons name="star-outline" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Explore" component={Explores} 
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="explore" color={color} size={26} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tabs" component={MyTabs} />
    </Drawer.Navigator>


  );
}

export default function App() {
  return (
  <NavigationContainer>
    <MyDrawer />
  </NavigationContainer>
  );
}