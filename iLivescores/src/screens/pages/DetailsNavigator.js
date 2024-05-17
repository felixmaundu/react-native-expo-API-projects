import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Summary from "./Summary";
import LineUps from "./LineUps";
import Stats from "./Stats";
import Odds from "./Odds";
const DetailsNavigator=() =>{
    const Tab = createBottomTabNavigator();
    return ( 
        <Tab.Navigator
        screenOptions={{
            tabBarIconStyle: {
                display: "none"
            },
            tabBarStyle:{
                elevation:0,
                // borderWidth:20
                
            },
            // tabBar
        }}
        >
            <Tab.Screen name="summary" component={Summary}/>
            <Tab.Screen name="lineups" component={LineUps}/>
            <Tab.Screen name="stats" component={Stats}/>
            <Tab.Screen name="odds" component={Odds}/>
        </Tab.Navigator>
     );
}

export default DetailsNavigator;