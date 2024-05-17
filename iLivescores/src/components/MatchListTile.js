import { Text, View, Dimensions, TouchableOpacity, FlatList } from "react-native";
import { useEffect, useState } from 'react';
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { colors } from "../utils/theme";

// import { SafeAreaView,FlatList,TouchableOpacity,View,Text,Dimensions, } from "react-native";


const MatchListTile = () => {
    const Width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const { theme } = useContext(ThemeContext);
    const [countries, setCountries] = useState([]);
    const [matches, setMatches] = useState([]);
    const [currentLeague, setCurrentLeague] = useState('');

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "f8b0ffcd0e60d0c36d19d5e70db1ca25");
        myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        //https://v3.football.api-sports.io/leagues
        //https://v3.football.api-sports.io/countries
        // leagues/seasons
        // leagues?season=2022
        const LEAGUE_SEASON_URL = `https://v3.football.api-sports.io/leagues?season=2022`;


        fetch(LEAGUE_SEASON_URL, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data.response)
                setCountries(data.response);

            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    const fetchMatches = (
        leagueID,
        seasonID,
        leagueName) => {
        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "f8b0ffcd0e60d0c36d19d5e70db1ca25");
        myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
//league
        const FIXTURES_URL = 
        `https://v3.football.api-sports.io/fixtures?date=2023-01-12&league=${leagueID}&season=${seasonID}`;


        fetch(FIXTURES_URL, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.response)
                setMatches(data.response);
                setCurrentLeague(leagueName);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <View style={{ marginTop: 20, margin: 15 }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                margin: 10,
            }}>match tile </Text>

            <FlatList
                data={countries}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => fetchMatches(
                    item.league.id,
                    item.league.season,
                     item.league.name)}
                     >
                        <View style={{
                            backgroundColor: "green",
                            padding: 10,
                            margin: 5,
                            borderRadius: 10,
                            height: 60,
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                color: theme.mode === "dark" ? "green" : colors.tint,
                            }}>{item.league.id} {item.league.name} {item.league.season}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />

            <FlatList
                data={matches}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Text>{item.teams.home.name}  {item.league.country}</Text>}
            // renderItem={item => displayMovies(item, props)}
            //   keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

export default MatchListTile;