import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import moment from 'moment'
import { getLocales, getCalendars } from 'expo-localization';


const { calendar, timeZone, uses24hourClock, firstWeekday } = getCalendars()[0];
const  timezone=()=> {
    const [currentDate, setcurrentDate] = useState('')
    // const [currentDateMoment, setcurrentDateMoment] = useState('')
    useEffect(()=>{ 
        var date = new Date().getDate()//current date
        var month = new Date().getMonth() + 1//current month
        var year = new Date().getFullYear()//current year
        var hours = new Date().getHours()//current hours
        var mins = new Date().getMinutes()//current mins
        var secs = new Date().getSeconds()//current secs


        setcurrentDate( 
            date + '/' + month+ '/' + year + '/' + hours + '/' +mins + '/' +secs
        )

       var dateMoment = moment().utcOffset('+05:30')
                        .format('YYYY-MM-DD hh:mm:ss a')//can use / for year
                        setcurrentDateMoment(dateMoment)     
    },[]);
// install moment



  return (
    <View style={styles.container}>
    
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      <Text>
        {currentDate}
      </Text>

      <Text>
        {currentDateMoment}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default timezone;