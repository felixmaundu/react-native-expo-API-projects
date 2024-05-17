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

const LiveMatches = (props) => {


  return (
    <ScrollView>
       <MatchTile
                    title="Fixture"
                    endpoint={"fixtures"}
                    subEndPoint={`live=all`}
                    // date={dateMoment1}
                    timeZone={timeZone}
                    navigation={props.navigation}
                />

      

    
    </ScrollView>
  );
};

export default LiveMatches;
