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


const { calendar, timeZone, uses24hourClock, firstWeekday } = getCalendars()[0];

const AllTodaysMatches = (props) => {

    var date = new Date()

    var timestamp = new Date(1580997600);
    var fomattedTimeStamp = timestamp.toLocaleTimeString()//.format("dd/mm/yyyy hh:MM:ss");
    console.log(fomattedTimeStamp)
  
  
  
   
    //get current day
    var dateMoment1 = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
  
   
    return (
        <View>
          
            <View>
              
                <MatchTile
                    title="Fixture"
                    // ?${subEndPoint}&timezone=${timeZone}
                    endpoint={`fixtures?&date=${dateMoment1}&timezone=${timeZone}`}
                    // subEndPoint={`date=${dateMoment1}`}
                    // timeZone={timeZone}
                    navigation={props.navigation}
                />
            </View>



        </View>
    );
};

export default AllTodaysMatches;
