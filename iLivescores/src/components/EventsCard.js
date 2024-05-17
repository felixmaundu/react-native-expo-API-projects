import { FlatList, Text, View,StyleSheet } from "react-native";
import { ApiService,fetchEvents } from '../service/ApiService';
import Loader from "./Loader";
import { colors } from "../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import React, { useEffect, useState } from 'react';


const EventsCard = (props,{ item }) => {
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState();

  useEffect(() => {
    const getMatches = async () => {
      const data = await ApiService(props.endpoint);
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
        <View>
          <FlatList
            keyExtractor={item => item.id}
            data={matches}

            // horizontal
            renderItem={item => displayMatches(item, props)}
          />
        </View>
      )}
    </View>
  );
};

const displayMatches = ({ item }, props) => {


  return (
    <TouchableOpacity style={{ height: 70 }}
   
      onPress={() => {
        props.navigation.push('matchDetails', { matchId: item });
    }}
   
    >
      



      <View style={{ flex: 1, flexDirection: 'row', }}>
       





       


        <View style={{ flex: 1, flexDirection: 'row' }}>
         
          <Text>{item.teams.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};





const styles = StyleSheet.create({

  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});


export default EventsCard;


// const EventsCard = ({ item }) => {
//   return (
//     <View style={[styles.container, item.team.home ? styles.homeTeamContainer
//      : styles.awayTeamContainer
//      ]
//     }
//      >
//       <Text style={styles.title}>{item.time.elapsed}</Text>
//       <Text style={styles.title}>{item.team.name}</Text>
//       <Text style={styles.title}>{item.player.name}</Text> 
//       <Text style={styles.title}>{item.assist.name}</Text>       
//       <Text style={styles.title}>{item.type}</Text>
//       <Text style={styles.title}>{item.detail}</Text>
//       <Text style={styles.title}>{item.comment}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 0.5,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   homeTeamContainer: {
//     alignSelf: 'flex-start',
//   },
//   awayTeamContainer: {
//     alignSelf: 'flex-end',
//   },
//   title: {
//     // styles for all the text elements
//   }

// });;

// export default EventsCard;

