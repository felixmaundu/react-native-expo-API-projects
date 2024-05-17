import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import ExpandableListView from 'react-native-expandable-list-view';

const [loading, setLoading] = useState(true);
const [matches, setMatches] = useState();

useEffect(() => {
    const getMatches = async () => {
      const data = await ApiService(props.endpoint,props.subEndPoint,props.timeZone);
      setMatches(data.response);
      setLoading(false);
    };
  
    getMatches();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ExpandableListView
          data={matches}
          renderRow={(rowData) => (
            <View style={styles.row}>
              <Text>{rowData.fixture.date}</Text>
              <View style={{
                flex: 1, flexDirection: 'row', height: 30,
                display: 'flex',
              }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={{}}>{rowData.teams.home.name}</Text>
                  <Image
                    source={{ uri: `${rowData.teams.home.logo}` }}
                    style={{ height: 20, width: 30 }}
                  />
                </View>
  
                <View style={{ flex: .3, alignItems: 'center', textAlign: 'right' }}>
                  <Text>{rowData.fixture.status.elapsed}'</Text>
                  <View>
                    <Text>{rowData.goals.home} - {rowData.goals.away}</Text>
                  </View>
                </View>
  
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                  <Image
                    source={{ uri: `${rowData.teams.away.logo}` }}
                    style={{ height: 20, width: 30 }}
                  />
                  <Text style={{}}>{rowData.teams.away.name}</Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
  