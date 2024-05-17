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

import moment from 'moment';
// import moment from 'moment';
import { getLocales, getCalendars } from 'expo-localization';
// ScheduledMatches
import Scheduled from '../../components/Scheduled';


const { calendar, timeZone, uses24hourClock, firstWeekday } = getCalendars()[0];



import MatchTile from '../../components/MatchTile';

// import moment from 'moment';
// import { getLocales, getCalendars } from 'expo-localization';


// const { calendar, timeZone, uses24hourClock, firstWeekday } = getCalendars()[0];

const AllTodaysMatches = (props) => {

    var date = new Date()

    var timestamp = new Date(1580997600);
    var fomattedTimeStamp = timestamp.toLocaleTimeString()//.format("dd/mm/yyyy hh:MM:ss");
    console.log(fomattedTimeStamp)
  
  
  
   
    //get current day
    var dateMoment1 = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
  
       // if (item.fixture.status.short === 'NS') {
        // return (
    return (
        <ScrollView>
          
            <View>
              <Text>schedule</Text>
                <Scheduled
                    title="Fixture"
                    endpoint={"fixtures"}
                    subEndPoint={`date=${dateMoment1}`}
                    // date={dateMoment1}
                    timeZone={timeZone}
                    navigation={props.navigation}
                />
            </View>



        </ScrollView>
    );
};

export default AllTodaysMatches;
