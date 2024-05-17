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
import CountryList from '../../components/CountryList';


const { calendar, timeZone, uses24hourClock, firstWeekday } = getCalendars()[0];

const HomeScreen = (props) => {


  var date = new Date()

  var timestamp = new Date(1580997600);
  var fomattedTimeStamp = timestamp.toLocaleTimeString()//.format("dd/mm/yyyy hh:MM:ss");
  console.log(fomattedTimeStamp)



  console.log(typeof (date))
  //get current day
  var dateMoment1 = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');

  console.log(typeof (dateMoment1))
  console.log(typeof (tommorrowDay4))
  console.log(typeof (yesterdayDay3))
  var yesterdayDay7 = moment(date, 'YYYY-MM-DD').subtract(8, 'day').endOf('day').format('YYYY-MM-DD');
  var yesterdayDay6 = moment(date, 'YYYY-MM-DD').subtract(7, 'day').endOf('day').format('YYYY-MM-DD');
  var yesterdayDay5 = moment(date, 'YYYY-MM-DD').subtract(6, 'day').endOf('day').format('YYYY-MM-DD');
  var yesterdayDay4 = moment(date, 'YYYY-MM-DD').subtract(5, 'day').endOf('day').format('YYYY-MM-DD');
  var yesterdayDay3 = moment(date, 'YYYY-MM-DD').subtract(4, 'day').endOf('day').format('YYYY-MM-DD');
  var yesterdayDay2 = moment(date, 'YYYY-MM-DD').subtract(3, 'day').endOf('day').format('YYYY-MM-DD');
  var yesterdayDay1 = moment(date, 'YYYY-MM-DD').subtract(2, 'day').endOf('day').format('YYYY-MM-DD');
  //getting yesterday
  var yesterdayDay = moment(date, 'YYYY-MM-DD').subtract(1, 'day').endOf('day').format('YYYY-MM-DD');
  //get tommorrow
  var tommorrow = moment(date, 'YYYY-MM-DD').add(1, 'day').endOf('day').format('YYYY-MM-DD');
  var tommorrowDay2 = moment(date, 'YYYY-MM-DD').add(2, 'day').endOf('day').format('YYYY-MM-DD');
  var tommorrowDay3 = moment(date, 'YYYY-MM-DD').add(3, 'day').endOf('day').format('YYYY-MM-DD');
  var tommorrowDay4 = moment(date, 'YYYY-MM-DD').add(4, 'day').endOf('day').format('YYYY-MM-DD');
  var tommorrowDay5 = moment(date, 'YYYY-MM-DD').add(5, 'day').endOf('day').format('YYYY-MM-DD');
  var tommorrowDay6 = moment(date, 'YYYY-MM-DD').add(6, 'day').endOf('day').format('YYYY-MM-DD');
  var tommorrowDay7 = moment(date, 'YYYY-MM-DD').add(7, 'day').endOf('day').format('YYYY-MM-DD');


  // .utcOffset(timeZone)
  // .format('YYYY-MM-DD')
  // .toLocaleString();






  return (
    <ScrollView>
      <Text>HomeScreen</Text>

      <Text>expandable list view</Text>
      {/* <MatchTile3

        title="Fixture"
        endpoint={"fixtures"}
        subEndPoint={`date=${dateMoment1}`}
        // date={dateMoment1}
        timeZone={timeZone}
        navigation={props.navigation}
      /> */}
      <View>
        <Text>Coutries begin here</Text>
        <CountryList
        countryEndpoint={"countries"}//?name=england
        />
        
      </View>
      <Text>{dateMoment1}</Text>
      <Text>{timeZone}</Text>
      <Text>for tommorrow</Text>
      <Text>{tommorrow}</Text>
      <Text>{tommorrowDay2}</Text>
      <Text>{tommorrowDay3}</Text>
      <Text>{tommorrowDay4}</Text>
      <Text>{tommorrowDay5}</Text>
      <Text>{tommorrowDay6}</Text>
      <Text>{tommorrowDay7}</Text>
      <Text>for yesterday</Text>
      <Text>{yesterdayDay}</Text>
      <Text>{yesterdayDay1}</Text>
      <Text>{yesterdayDay2}</Text>
      <Text>{yesterdayDay3}</Text>
      <Text>{yesterdayDay4}</Text>
      <Text>{yesterdayDay5}</Text>
      <Text>{yesterdayDay6}</Text>
      <Text>{yesterdayDay7}</Text>

<View>
  <Text>all matches</Text>
  <MatchTile
        title="Fixture"
        endpoint={"fixtures"}
        subEndPoint={`date=${dateMoment1}`}
        // date={dateMoment1}
        timeZone={timeZone}
        navigation={props.navigation}
      />
</View>
      

      <Text style={{ color: 'blue', fontSize: 25 }}>where only live matches start</Text>
      {/* <MatchTile
        title="Live Matches"
        endpoint={"fixtures"}
        subEndPoint={"live=all"}

        timeZone={timeZone}
        navigation={props.navigation}
      />
      <Text style={{ color: 'blue', fontSize: 25 }}>where all ended matches begin</Text>
      <MatchTile
        title="Live Matches"
        endpoint={"fixtures"}
        subEndPoint={"status=ft"}

        timeZone={timeZone}
        navigation={props.navigation}
      /> */}

    
    </ScrollView>
  );
};

export default HomeScreen;
