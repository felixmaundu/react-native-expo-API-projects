/* eslint-disable prettier/prettier */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { colors } from './src/utils/theme';
import { useContext } from "react";
import { Appearance } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import {BlurView} from 'expo-blur';
import { ThemeContext } from "./src/contexts/ThemeContext";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Movies, Series, Persons, Favorites } from './src/navigation/CustomNavigation';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome, Feather } from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Setting from './src/screens/drawer/Settings';
import { color } from 'react-native-reanimated';
import { storeData, getData } from './src/utils/asyncstorage';
import * as SplashScreen from "expo-splash-screen";
import MovieScreen from './src/screens/bottom_tabs/MovieScreen';
import SeriesScreen from './src/screens/bottom_tabs/SeriesScreen';
import PersonsScreen from './src/screens/bottom_tabs/PersonsScreen';
import PersonDetails from './src/components/PersonDetails';
import FavoriteScreen from './src/screens/bottom_tabs/FavoriteScreen';
import DetailMovieTile from './src/components/DetailMovieTile'
import DetailTvTile from './src/components/DetailTvComponent';
import GenreItem from './src/components/GenreItem';
import ListMovie from './src/components/ListMovie';
import ListMoviePop from './src/components/ListMoviePop';
import ListMovieTopRat from './src/components/ListMovieTopRat';
import ListMovieUpcom from './src/components/ListMovieUpcom';
import SearchMovie from './src/components/SearchMovie';
import SearchTv from './src/components/SearchTv';


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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Movies(){
  const { theme } = useContext(ThemeContext);
  return (
      <Stack.Navigator>
          <Stack.Screen name="MovieScreen" component={MovieScreen} options={{ headerShown: false }} />
          <Stack.Screen name='movieDetails'component={DetailMovieTile} options={{headerShown:false }}/>
          <Stack.Screen name='searchMovie'component={SearchMovie} options={{headerShown:false }}/>
          <Stack.Screen name ='listMovie' component={ListMovie} options={{
            headerTintColor:theme.mode === "dark" ? 'orange' : colors.tint,
            headerStyle:{
              backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary,
              // backgroundColor: 'orange'
            },
           }}/>
           <Stack.Screen name ='Upcoming' component={ListMovieUpcom} options={{
            headerTintColor:theme.mode === "dark" ? 'orange' : colors.tint,
            headerStyle:{
              backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary,
              // backgroundColor: 'orange'
            },
           }}/>
           <Stack.Screen name ='popular' component={ListMoviePop} options={{
            headerTintColor:theme.mode === "dark" ? 'orange' : colors.tint,
            headerStyle:{
              backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary,
              // backgroundColor: 'orange'
            },
           }}/>
           <Stack.Screen name ='toprated' component={ListMovieTopRat} options={{
            headerTintColor:theme.mode === "dark" ? 'orange' : colors.tint,
            headerStyle:{
              backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary,
              // backgroundColor: 'orange'
            },
           }}/>
          {/* <Stack.Screen name="HomeScreen" component={MyTopTabs} options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name="movieDetails" component={MovieDetails} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
  )
}
function Series(){
  return (
      <Stack.Navigator>
          <Stack.Screen name="SeriesScreen" component={SeriesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="tvDetails" component={DetailTvTile} options={{ headerShown: false }} />
          <Stack.Screen name='searchTv'component={SearchTv} options={{headerShown:false }}/>
      </Stack.Navigator>
  )
}
  function Persons(){
  return (
      <Stack.Navigator>
          <Stack.Screen name="PersonsScreen" component={PersonsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="persondetails" component={PersonDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}
  function Favorites(){
  return (
      <Stack.Navigator>
          <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ headerShown: false }} />
          <Stack.Screen name="genreScreen" component={GenreItem} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

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
   
      <Tab.Screen name="Movies" component={Movies}
        options={{
          headerShown: false,
          tabBarLabel: 'Movies',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-open-play" color={color} size={26} />
          ),
        }}
      />
     
      <Tab.Screen name="Series" component={Series}
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

          tabBarLabel: 'Genres',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="dashboard" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Setting}
        options={{
          color: colors.tint,

          tabBarLabel: 'settings',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
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
        <MyTabs />
      </NavigationContainer>
    </ThemeContext.Provider>

  );
}

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
