import { Text, View } from "react-native";

const Lineups=()=> {
    return ( 
        <View>
            <Text>Lineups</Text>
        </View>
     );
}

export default Lineups;

// <View style={{ height: 70, }}

// //   onPress={() => {
// //     props.navigation.push('matchDetails', { matchId: item });
// // }}

// >

//     <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
//         {/* <Text>{timeString}</Text> */}
//         {matchId?.fixture.status.short === 'NS' || 'POST' && 'CANC' ? (
//             null
//         ) : (
//             <View style={{}}>
//                 <Text>{matchId?.fixture.status.elapsed}'</Text>
//             </View>
//         )}
//         <View>
//             {elapsedString ? (
//                 <View style={{}}>
//                     <Text>{elapsedString}</Text>
//                 </View>
//             ) : null}
//         </View>
//     </View>
//     <View style={{ flex: 1, flexDirection: 'row', }}>
//         <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
//             <Text style={{ fontSize: 20 }}>{matchId?.teams.home.name}</Text>
//             <Image
//                 source={{ uri: `${matchId?.teams.home.logo}` }}
//                 style={{ height: 40, width: 30 }}
//             />
//         </TouchableOpacity>





//         <View style={{ flex: .3, alignItems: 'center', textAlign: 'right' }}>
//             <View>
//                 <Text>{matchId?.goals.home} - {matchId?.goals.away}</Text>
//             </View>

//             {matchId?.fixture.status.short != '1H' ? (
//                 <View>
//                     <Text style={{ fontSize: 10 }}>HT {matchId?.score.halftime.home}-{matchId?.score.halftime.away}</Text>
//                 </View>
//             ) : null}
//         </View>


//         <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
//             <Image
//                 source={{ uri: `${matchId?.teams.away.logo}` }}
//                 style={{ height: 40, width: 30 }}
//             />
//             <Text style={{ fontSize: 20, flex: 1 }} numberOfLines={3} ellipsizeMode='tail'>{matchId?.teams.away.name}</Text>
//         </TouchableOpacity>
//     </View>

// </View>
// <View style={{ marginTop: 20 }}>
//     <View style={{ backgroundColor: 'grey' }}>
//         <Text>Match info</Text>
//     </View>
//     <View style={{ padding: 14 }}>
//         {matchId?.fixture.referee === null ? (
//             <Text>Referee: N/A</Text>
//         ) : (
//             <View style={{}}>
//                 <Text>Referee {matchId?.fixture.referee}</Text>
//             </View>
//         )}

//         {matchId?.fixture.venue.name === null ? (
//             <Text> N/A </Text>
//         ) : (
//             <View style={{}} >
//                 <Text style={{ color: 'orange', fontSize: 15 }} numberOfLines={3}>Venue: {matchId?.fixture.venue.name}</Text>
//             </View>
//         )}

//         {matchId?.fixture.venue.city === null ? (
//             <Text> N/A </Text>
//         ) : (
//             <View style={{}}>
//                 <Text style={{ color: 'orange', fontSize: 15 }} numberOfLines={3}>city {matchId?.fixture.venue.city}</Text>
//             </View>
//         )}
//     </View>
// </View>
// <View>
//     <FlatList
//   data={events}
//   keyExtractor={item => item.id}
//   renderItem={({ item }) => <EventsCard item={item} />}

// />
//     {/* <EventsCard
//         title="Events"
//         // `https://v3.football.api-sports.io/fixtures/events?fixture=${id}`,
//         url={`fixtures/events?fixture=${props.route.params.matchId}`}
//     /> */}
// </View>