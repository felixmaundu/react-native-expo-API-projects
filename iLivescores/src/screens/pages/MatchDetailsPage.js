import { Text, View, TouchableOpacity, Image, FlatList, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import Loader from '../../components/Loader';
import { colors } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ApiService, fetchEvents } from '../../service/ApiService';
import EventsCard from "../../components/EventsCard";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DetailsNavigator from "./DetailsNavigator";
const MatchDetailsPage = ({props,route,navigation}) => {
    const { theme } = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState();
    const [events, setEvents] = useState();
    const {matchId} = route.params;
  
    // const { matchId } = props.route.params;
    const Tab = createBottomTabNavigator();

    const [matchDetails, setMatchDetails] = useState({});

    useEffect(() => {
        const getMatchDetails = async () => {
            const data = await ApiService(
                matchId,
                `fixtures?id=${props.route.params.matchId}`);
            setMatchDetails(data.response);
            console.log(data);
        };
        getMatchDetails();
    }, []);

    // useEffect(() => {
    //     const getDetails = async () => {//fixtures?id=215662
    //         const data = await ApiService(`/fixtures?id=${props.route.params.matchId}`);
    //         setDetails(data.response);
    //         console.log(data.response);
    //         setLoading(false);
    //     };

    //     getDetails();
    // }, []);
    // useEffect(() => {
    //     //setLoading(true);
    //     fetchEvents(matchId.fixture.id).then((data) => {
    //       setEvents(data.response);
    //       console.log(data.response);
          
    //       setLoading(false);
    //     });
    //   }, []);

    // Extract the hours and minutes from the match date
    const date = new Date(matchId?.fixture.date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // Pad the minutes with a leading zero if it is less than 10
    const paddedMinutes = minutes.toString().padStart(2, '0');
    // Format the hours and minutes into a string like "HH:MM"
    const timeString = `${hours}:${paddedMinutes}`;
    const elapsedTime = matchId?.fixture.status.elapsed;
    let elapsedString = "";
    if (matchId?.fixture.status.short === '1H' || matchId?.fixture.status.short === '2H') {
        elapsedString = `${elapsedTime}'`
    } else if (matchId?.fixture.status.short === 'HT') {
        elapsedString = "HT";
    } else if (matchId?.fixture.status.short === 'FT') {
        elapsedString = "FT";
    } else if (matchId?.fixture.status.short === '90') {
        elapsedString = `${elapsedTime}+`;
    } else if (matchId?.fixture.status.short === '90') {
        elapsedString = `${elapsedTime}+`;
    } else if (matchId?.fixture.status.short === 'POST') {
        elapsedString = "POST.";
    } else if (matchId?.fixture.status.short === 'CANC') {
        elapsedString = "CANC.";
    }

   
    return (
        <SafeAreaView>
            <ScrollView>
            <Text>details for match</Text>



            {/* <Text style={{ fontSize: 20 }}>kk{matchId?.teams.home.name}</Text> */}
            <View style={{ height: 70, }}

            //   onPress={() => {
            //     props.navigation.push('matchDetails', { matchId: item });
            // }}

            >

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                   
                    {matchId?.fixture.status.short === 'NS' || 'POST' && 'CANC' ? (
                        null
                    ) : (
                        <View style={{}}>
                            <Text>{matchId?.fixture.status.elapsed}'</Text>
                        </View>
                    )}
                    <View>
                        {elapsedString ? (
                            <View style={{}}>
                                <Text>{elapsedString}</Text>
                            </View>
                        ) : null}
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 20 }}>{matchId?.teams.home.name}</Text>
                        <Image
                            source={{ uri: `${matchId?.teams.home.logo}` }}
                            style={{ height: 40, width: 30 }}
                        />
                    </TouchableOpacity>





                    <View style={{ flex: .3, alignItems: 'center', textAlign: 'right' }}>
                        <View>
                            <Text>{matchId?.goals.home} - {matchId?.goals.away}</Text>
                        </View>

                        {matchId?.fixture.status.short != '1H' ? (
                            <View>
                                <Text style={{ fontSize: 10 }}>HT {matchId?.score.halftime.home}-{matchId?.score.halftime.away}</Text>
                            </View>
                        ) : null}
                    </View>


                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                        <Image
                            source={{ uri: `${matchId?.teams.away.logo}` }}
                            style={{ height: 40, width: 30 }}
                        />
                        <Text style={{ fontSize: 20, flex: 1 }} numberOfLines={3} ellipsizeMode='tail'>{matchId?.teams.away.name}</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ marginTop: 20 }}>
                <View style={{ backgroundColor: 'grey' }}>
                    <Text>Match info</Text>
                </View>
                <View style={{ padding: 14 }}>
                    {matchId?.fixture.referee === null ? (
                        <Text>Referee: N/A</Text>
                    ) : (
                        <View style={{}}>
                            <Text>Referee {matchId?.fixture.referee}</Text>
                        </View>
                    )}

                    {matchId?.fixture.venue.name === null ? (
                        <Text> N/A </Text>
                    ) : (
                        <View style={{}} >
                            <Text style={{ color: 'orange', fontSize: 15 }} numberOfLines={3}>Venue: {matchId?.fixture.venue.name}</Text>
                        </View>
                    )}

                    {matchId?.fixture.venue.city === null ? (
                        <Text> N/A </Text>
                    ) : (
                        <View style={{}}>
                            <Text style={{ color: 'orange', fontSize: 15 }} numberOfLines={3}>city {matchId?.fixture.venue.city}</Text>
                        </View>
                    )}
                </View>
            </View>
            <View>
                {/* <FlatList
              data={events}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <EventsCard item={item} />}
            
            /> */}
                <EventsCard
                    title="Events"
                    ///fixtures/events?fixture=215662
                    url={`fixtures/events?fixture=${route.params}`}
                />
            </View>

          
            {/* <DetailsNavigator/> */}
            </ScrollView>
        </SafeAreaView>
    );
}

// const EventsCard = (props,{ item }) => {
//     useEffect(() => {
//         setLoading(true);
//         fetchEvents(matchId.fixture.id).then((data) => {
//           setEvents(data.response);
//           console.log(data.response);
//           setLoading(false);
//         });
//       }, []);
     
    
//     return (
//         <View >
//         <Text >{item.time.elapsed}</Text>
//         <Text >{item.team.name}</Text>
//         <Text >{item.player.name}</Text> 
//         <Text >{item.assist.name}</Text>       
//         <Text >{item.type}</Text>
//         <Text >{item.detail}</Text>
//         <Text >{item.comment}</Text>
        
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f0f0f0'
//     },
//     matchFixtureContainer: {
//         padding: 10,
//         backgroundColor: 'white',
//         borderRadius: 5,
//         marginBottom: 10
//     },
//     matchFixture: {
//         fontSize: 16
//     },
//     tabContainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#f0f0f0'
//     }
// });



export default MatchDetailsPage;