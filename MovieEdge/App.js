/* eslint-disable prettier/prettier */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { colors } from './src/utils/theme';
import { useContext } from "react";
import { Appearance } from 'react-native';
// import {BlurView} from 'expo-blur';
import { ThemeContext } from "./src/contexts/ThemeContext";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Movies, Series, Persons, Favorites } from './src/navigation/CustomNavigation';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome, Feather } from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Setting from './src/screens/drawer/Settings';
import { color } from 'react-native-reanimated';
import { storeData, getData } from './src/utils/asyncstorage';
import * as SplashScreen from "expo-splash-screen";
//npm run android
//tmdb api key 53939b3da3d575c42c212fb77c52c5a5
// npx create-expo-app AwesomeProject
//npx expo start  //npm start
//npx expo install react-native-pager-view
// npx expo install react-native-reanimated@~2.12.0
// "plugins": [
//   [
//     "expo-media-library",
//     {
//       "photosPermission": "Allow $(PRODUCT_NAME) to access your photos.",
//       "savePhotosPermission": "Allow $(PRODUCT_NAME) to save photos.",
//       "isAccessMediaLocationEnabled": true
//     }
//   ]
// ],

// keep splash as we fetch everything
SplashScreen.preventAutoHideAsync();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  // const theme = { mode: "dark" }
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <Tab.Navigator

      screenOptions={{

        // tabBarActiveBackgroundColor:colors.tint,
        // tabBarInactiveBackgroundColor:colors.tint,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
        }
      }}
    >
      <Tab.Screen name="Movie" component={Movies}
        options={{
          headerShown: false,
          tabBarLabel: 'Movies',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-open-play" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Serie" component={Series}
        options={{
          tabBarLabel: 'Series',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="tv" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Person" component={Persons}
        options={{
          tabBarLabel: 'Casts',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="cast" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Favorite"

        component={Favorites}
        options={{
          color: colors.tint,

          tabBarLabel: 'Favorite',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="star-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  // const component = {Movies};
  // const theme = { mode: "dark" }
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <Drawer.Navigator
      screenOptions={{
        //   headerStyle:{
        // color:'white'
        //   },
        headerTintColor: "orange",
        drawerStyle: {

          backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
        }
      }}
    >
      <Drawer.Screen name="Discover" component={MyTabs}
        options={{
          headerShown: true,
          headerTitleStyle: {
            color: "orange"

          },
          headerStyle: {
            color: 'orange'
          },
          // color:"orange",
          headerStyle: {
            backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary,

          },

        }} />
      <Drawer.Screen name="Settings" component={Setting} options={{
        headerTitleStyle: {
          color: "orange"

        },
        headerStyle: {
          color: 'orange'
        },
        // color:"orange",
        headerStyle: {
          backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary,

        },

      }} />
    </Drawer.Navigator>


  );
}

export default function App() {

  const [theme, setTheme] = useState({ mode: "light" });//light
  // const theme = { mode: "dark" }
  // let activeColors = colors[theme.mode];
  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark",
        newTheme = { mode, system: false };
    } else {
      if (newTheme.system) {
        const systemColorScheme = Appearance.getColorScheme();

        mode == systemColorScheme === "dark" ? "dark" : "light";
        alert(systemColorScheme)
        newTheme = { ...newTheme, mode };
      } else {
        newTheme = { ...newTheme, system: false };
      }
    }
    setTheme(newTheme);
    storeData("newsFeedTheme", newTheme);

  };

  //monitor for changes
  if (theme.system) {
    Appearance.addChangeListener(({ colorScheme }) => {
      updateTheme({ system: true, mode: colorScheme })
    });
  }

  const fetchStoredTheme = async () => {
    try {

      const themeData = await getData("newsFeedTheme");

      if (themeData) {
        updateTheme(themeData);
      }
    } catch ({ message }) {
      alert(message);
    } finally {
      setTimeout(() => SplashScreen.hideAsync(), 1000);
      SplashScreen.hideAsync();
    }
  }

  useEffect(() => {
    fetchStoredTheme();

  }, [])
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </ThemeContext.Provider>

  );
}