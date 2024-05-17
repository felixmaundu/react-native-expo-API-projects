/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SectionList,
  StyleSheet,
  StatusBar
} from 'react-native';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
// import reactNativeIntl from 'react-native-intl';

import { getLocales, getCalendars } from 'expo-localization';
import { FlatList } from 'react-native-gesture-handler';




const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const { calendar, timeZone, uses24hourClock, firstWeekday } = getCalendars()[0];


const categories = [
  'Entertainment',
  'Business',
  'Politics',
  'Health',
  'Technology',
  'Sports',
];
const FavoriteScreen = (props) => {

  // const datalist = [
  //   {key:'1', title:'Screen 1', screen:'Screen1'},
  //   {key:'2', title:'Screen 2', screen:'Screen2'},
  //   {key:'3', title:'Screen 3', screen:'Screen3'}
  // ]

  // const navigation = useNavigation();


  // const Item = ({title, screen})=>(
  //   <TouchableOpacity  onPress={()=> navigation.navigate(screen)}>
  //     <Text style={{justifyContent:'row'}}>{title}</Text>
  //   </TouchableOpacity>
  // );


  const [currentDate, setcurrentDate] = useState('');
  const [currentDateMoment, setcurrentDateMoment] = useState('');
  // const [stringDateFormat, setstringDateFormat] = useState('');



  moment.locale('en');
  var dt = '2022-12-28T00:00:00';

  // working but format issue
  var date = new Date();
  var datestr = date.toLocaleDateString(
       'en-US', {//en-US
    year: 'numeric', month: '2-digit', day: '2-digit', separator:'-'
  },
  );

  useEffect(() => {


    var datestrday = new Date().getDate().toLocaleString()//current date
    var tommorrow = new Date().getDate() + 1//current date
    var month = new Date().getMonth().toLocaleString()//current month
    var year = new Date().getFullYear().toLocaleString();//current year
    var nextyear = new Date().getFullYear() + 1//current year
    var hours = new Date().getHours()//current hours
    var mins = new Date().getMinutes()//current mins
    var secs = new Date().getSeconds()//current secs
    setcurrentDate(
      datestrday + '-' + month + '-' + year + '  - - -' + hours + ':' + mins + ':' + secs
    )

    var dateMoment = moment().utcOffset(timeZone)//'+03:00'
      .format('YYYY-MM-DD hh:mm:ss a').toLocaleString()//can use / for year
    setcurrentDateMoment(dateMoment);

    // var stringDateFormat = setcurrentDate(datestr)
    // setstringDateFormat(stringDateFormat)

  }, []);


  const ItemSectionList = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <ScrollView>


<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate(index, {
              category,
            })
          }>
          <View>
            <Text
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: 'black',
                fontSize: 19,
                margin: 10,
                borderRadius: 10,
              }}>
              {category}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>

    {/* <FlatList
    data={datalist}
    renderItem = {({item})=>
  <Item   title={item.title} screen={item.screen}/>}
    /> */}
      <Text>FavoriteScreen</Text>
      <Text>{currentDate}</Text>
      <Text>{currentDateMoment}</Text>
      <Text>timezone is {timeZone}</Text>
      <Text>{calendar}</Text>
      <Text>{moment(dt).format('d MMM')}</Text>
      <Text>String date format trial yooh -  :{datestr}</Text>
      {/* <Text>using date time formatter:- {dateStrin}</Text> */}
      {/* <Text>String date format w/useState trial -  {stringDateFormat}</Text> */}

      <View>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <ItemSectionList title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"//'rgba(247,247,247,1.0)'//gray
  },
  title: {
    fontSize: 24
  }
});