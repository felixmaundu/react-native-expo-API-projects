/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList,
     StatusBar } from "react-native";
const DATA_SECTIONS = [
    { title: 'A', data: ['damon', 'dar', 'kip', 'yego', 'yooh', 'oyaah'] },
    { title: 'B', data: ['omo', 'ndi', 'nda', 'nde', 'abdi', 'oyaah'] },
    { title: 'C', data: ['abdu', 'badi', 'dida', 'mwal', 'imu'] },
    { title: 'D', data: ['kav', 'vel', 'o', 'mau', 'ndu', 'mev'] },
    { title: 'E', data: ['inya', 'kil', 'lonzi', 'musy', 'ka', 'yap'] },
    { title: 'F', data: ['damon', 'dar', 'kip', 'yego', 'yooh', 'oyaah'] },
    { title: 'G', data: ['damon', 'dar', 'kip', 'yego', 'yooh', 'oyaah'] }

]

// const renderItem = ({ item, index }) => {
//     return (
//       <Text style={{
//         padding: 10,
//         fontSize: 25,
//         height: 50
//       }}>{item}</Text>
//     )
//   }

//   const renderHeader = ({ section }) => {
//     return (
//       <Text style={{
//         padding: 10,
//         fontSize: 25,
//         fontWeight: 'bold',
//         backgroundColor: 'gray'//'rgba(247,247,247,1.0)'//gray
//       }}>{section.title}</Text>
//     )
//   }

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

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
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

export default App;