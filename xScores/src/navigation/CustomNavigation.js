import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/bottom_tabs/HomeScreen';
import ExploreScreen from '../screens/bottom_tabs/ExploreScreen';
import FavoriteScreen from '../screens/bottom_tabs/FavoriteScreen';
import LiveMatches from '../screens/top_tabs/LiveMatches';
import ScheduledMatches from '../screens/top_tabs/ScheduledMatches';
import AllTodaysMatches from '../screens/top_tabs/AllTodaysMatches';
import FinishedMatches from '../screens/top_tabs/FinishedMatches';
import { Ionicons, MaterialCommunityIcons, MaterialIcons,FontAwesome } from "@expo/vector-icons";
// import MovieDetails from '../screens/bottom_tabs/MovieDetails';

// active color and if statement in react
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


const MyTopTabs = () => {
    return (
        // <TopTab.Navigator    screenOptions={{tabBarScrollEnabled:true}}>
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

const Homes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={MyTopTabs} options={{ headerShown: false }} />
            {/* <Stack.Screen name="movieDetails" component={MovieDetails} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
    )
}
export { Homes };


const Favorites = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export { Favorites };


const Explores = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export { Explores };