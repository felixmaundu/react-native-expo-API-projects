import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import {POSTER_IMAGE} from '../config';
import { ApiService,ApiServiceFinishedMatches } from '../service/ApiService';
// import Styles from '../Styles';
import Loader from './Loader';

const MatchTileFt =( {item},props) => {
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState();

//   const leagueID = item.league.id;
//   const timeZone = props.timeZone;

  useEffect(() => {
    const getMatches = async () => {
      const data = await ApiServiceFinishedMatches(props.leagueID, props.timeZone,);
      setMatches(data.response);
      console.log(data);
      setLoading(false);
    };

    getMatches();
  }, []);





  
  
  return (
    <View style={{ backgroundColor: '#F5FCFF', }}>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView>
          <FlatList
            keyExtractor={item => item.id}
            data={matches}

            // horizontal
            // renderItem={item => displayMatches(item,item, props)}
            renderItem={({ item: match }) => displayMatches(match, item,props)}
          />
        </ScrollView>
      )}
    </View>
  );
};


const displayMatches = ({ item }, match,props) => {

    
    // Extract the hours and minutes from the match date
    const date = new Date(item.fixture.date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Pad the minutes with a leading zero if it is less than 10
    const paddedMinutes = minutes.toString().padStart(2, '0');
    // Format the hours and minutes into a string like "HH:MM"
    const timeString = `${hours}:${paddedMinutes}`;

    const elapsedTime = item.fixture.status.elapsed;
    let elapsedString = "";
    if (item.fixture.status.short === '1H' || item.fixture.status.short === '2H') {
    elapsedString = `${elapsedTime}'`
    } else if (item.fixture.status.short === 'HT') {
    elapsedString = "HT";
    } else if (item.fixture.status.short === 'FT') {
    elapsedString = "FT";
    }else if (item.fixture.status.short === '90'){
      elapsedString = `${elapsedTime}+`;
    }else if (item.fixture.status.short === '90'){
      elapsedString = `${elapsedTime}+`;
    }else if(item.fixture.status.short === 'POST'){
      elapsedString = "POST.";
    }else if(item.fixture.status.short === 'CANC'){
      elapsedString = "CANC.";
    }
    return (
      <TouchableOpacity style={{ height: 70 }}>
        <View style={{ height: 1, width: '100%', backgroundColor: 'rgba(0,0,0,0.1)' }}></View>
        <View style={{  flexDirection: 'row',justifyContent:'space-between' }}>
          
          <Text>{timeString}</Text>
          {item.fixture.status.short === 'NS'||'POST'&&'CANC'  ? (
           null
          ) : (
            <View style={{}}>
              <Text>{item.fixture.status.elapsed}'</Text>
            </View>
          )}

          <View>
            {/* Check if the match has started or not 'NS'||'POST'||'CANC' */}
         {elapsedString ? (
          <View style={{}}>
            <Text>{elapsedString}</Text>
          </View>
        ) : null}
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Text style={{}}>{item.teams.home.name}</Text>
            <Image
              source={{ uri: `${item.teams.home.logo}` }}
              style={{ height: 20, width: 30 }}
            />
          </View>
          <View style={{ flex: .3, alignItems: 'center', textAlign: 'right' }}>
            <View>
              <Text>{item.goals.home} - {item.goals.away}</Text>
            </View>
            {/* Check if the match is in halftime */}
            {item.fixture.status.short != '1H' ? (
              <View>
                <Text style={{ fontSize: 10 }}>HT {item.score.halftime.home}-{item.score.halftime.away}</Text>
              </View>
            ) : null}
          </View>
  
  
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image
              source={{ uri: `${item.teams.away.logo}` }}
              style={{ height: 20, width: 30 }}
            />
            <Text>{item.teams.away.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
export default MatchTileFt;


const styles = StyleSheet.create({

  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});
