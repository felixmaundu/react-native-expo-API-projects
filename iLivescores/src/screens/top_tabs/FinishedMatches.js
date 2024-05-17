/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import MatchTile from '../../components/MatchTile';
import moment from 'moment';
// import moment from 'moment';
import { getLocales, getCalendars } from 'expo-localization';
// import MatchTileFt from '../../components/MatchTileFt';


const { calendar, timeZone, uses24hourClock, firstWeekday } = getCalendars()[0];

const FinishedMatches = (props) => {
//   const [loading, setLoading] = useState(true);
//   const [matches, setMatches] = useState();

//   const leagueID = props.leagueID;
// //   const timeZone = props.timeZone;

//   useEffect(() => {
//     const getMatches = async () => {
//       const data = await ApiServiceFinishedMatches(leagueID, props.timeZone,);
//       setMatches(data.response);
//       console.log(data);
//       setLoading(false);
//     };

//     getMatches();
//   }, []);

  return (
    <View>
      {/* <MatchTileFt
                    title="Fixture"
                    //leagueID={leagueID}
                   
                    // date={dateMoment1}
                    timeZone={timeZone}
                    navigation={props.navigation}
                /> */}


      

    
    </View>
  );
};

export default FinishedMatches;
