/* eslint-disable prettier/prettier */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { colors } from './src/utils/theme';
import { useContext } from "react";
import { Appearance } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import {BlurView} from 'expo-blur';
import { ThemeContext } from "./src/contexts/ThemeContext";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Movies, Series, Persons, Favorites } from './src/navigation/CustomNavigation';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome, Feather,AntDesign,Entypo } from "@expo/vector-icons";
import Setting from './src/screens/drawer/Settings';
import { storeData, getData } from './src/utils/asyncstorage';
import * as SplashScreen from "expo-splash-screen";
import MovieScreen from './src/screens/bottom_tabs/HomeScreen';
import SeriesScreen from './src/screens/bottom_tabs/NewsScreen';
import PersonsScreen from './src/screens/bottom_tabs/ExploreScreen';
import FavoriteScreen from './src/screens/bottom_tabs/FavoriteScreen';
import HomeScreen from './src/screens/bottom_tabs/HomeScreen';
import ExploreScreen from './src/screens/bottom_tabs/ExploreScreen';
import NewsScreen from './src/screens/bottom_tabs/NewsScreen';
import LiveMatches from './src/screens/top_tabs/LiveMatches';
import ScheduledMatches from './src/screens/top_tabs/ScheduledMatches';
import AllTodaysMatches from './src/screens/top_tabs/AllTodaysMatches';
import FinishedMatches from './src/screens/top_tabs/FinishedMatches';
import MatchDetailsPage from './src/screens/pages/MatchDetailsPage';




SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const HomeTopTabs = () => {
  return (
      
      <TopTab.Navigator
          initialRouteName='All'

          screenOptions={{

              tabBarBounces: true,

              tabBarIndicatorStyle: {
                  backgroundColor: 'blue'
              },
              // tabBarInactiveTintColor:'gray',
              tabBarScrollEnabled: true,
              tabBarIndicator: () => null,
              tabBarStyle: {
                  // backgroundColor:'#fff'
              },
              tabBarItemStyle: {
                  width: "auto",
                  alignItems: 'flex-start'
              },
              tabBarLabelStyle: {
                  // tabBarActiveTintColor:'blue',
                  fontSize: 17,
                  // color:'#000',
                  textTransform: 'capitalize',
              }

          }}
          sceneContainerStyle={{ backgroundColor: '#fff' }}
      >
          <TopTab.Screen name="All" component={AllTodaysMatches}

              options={{
                  headerShown: false,
                  // tabBarIcon: ({ color }) => (
                  //     <FontAwesome name="soccer-ball-o" color={color} size={26} />
                  // ),
              }} />

          <TopTab.Screen name="live" component={LiveMatches} options={{
              headerShown: false, 
              // tabBarIcon: ({ color }) => (
              //     <MaterialCommunityIcons name="record" color={color} size={26} />
              // ),
          }} />
          <TopTab.Screen name="Finished" component={FinishedMatches} options={{ headerShown: false }} />
          <TopTab.Screen name="Scheduled" component={ScheduledMatches} options={{
              headerShown: false,
              // tabBarIcon: ({ color }) => (
              //     <MaterialIcons name="schedule" color={color} size={26} />
              // ),
          }} />


      </TopTab.Navigator>
  )
}

function Homes(){
  const { theme } = useContext(ThemeContext);
  return (
      <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeTopTabs} options={{ headerShown: false }} />
          <Stack.Screen name='matchDetails'component={MatchDetailsPage} options={{headerShown:false }}/>
          {/* <Stack.Screen name='movieDetails'component={DetailMovieTile} options={{headerShown:false }}/>
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
           }}/> */}
          {/* <Stack.Screen name="HomeScreen" component={MyTopTabs} options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name="movieDetails" component={MovieDetails} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
  )
}
function Explores(){
  return (
      <Stack.Navigator>
          <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
  )
}
  function News(){
  return (
      <Stack.Navigator>
          <Stack.Screen name="NewsScreen" component={NewsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}
  function Favorites(){
  return (
      <Stack.Navigator>
          <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ headerShown: false }} />
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
   
      <Tab.Screen name="Home" component={Homes}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
     
      <Tab.Screen name="Favorite" component={Favorites}
        options={{
          tabBarLabel: 'Favorite',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="staro" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen name="Person" component={Persons}
        options={{
          tabBarLabel: 'Casts',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="cast" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen name="Explore"

        component={Explores}
        options={{
          color: colors.tint,

          tabBarLabel: 'explore',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="News" component={News}
        options={{
          color: colors.tint,

          tabBarLabel: 'news',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="newsletter" color={color} size={26} />
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
