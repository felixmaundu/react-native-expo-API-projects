import ExpandableListView from 'react-native-expandable-list-view';
const MatchTile = props => {
    const [loading, setLoading] = useState(true);
    const [matches, setMatches] = useState();
  
    useEffect(() => {
      const getMatches = async () => {
        const data = await ApiService(props.endpoint, props.subEndPoint, props.timeZone);
        setMatches(data.response);
        console.log(data);
        setLoading(false);
      };
  
      getMatches();
    }, []);
    return (
      <View>
        {loading ? (
          <Loader />
        ) : (
          <ExpandableListView
            data={matches}
            renderRow={(rowData) => displayMatches(rowData, props)}
          />
        )}
      </View>
    );
  };

  
  const displayMatches = (rowData, props) => {
    return (
      <View style={styles.row}>
        <TouchableOpacity
          //   onPress={() => {
          //     props.navigation.navigate('movieDetails', {movieId: item.id});//push navigate
          //   }}
          style={{ height: 60 }}
        >
          <View>
            <Text>{rowData.fixture.date}</Text>
          </View>
          <View style={{
            flex: 1, flexDirection: 'row', height: 30,
            display: 'flex',
          }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Image
                source={{ uri: `${rowData.teams.home.logo}` }}
                style={{ height: 20, width: 30 }}
              />
              <Text style={{}}>{rowData.teams.home.name}</Text>
            </View>
            <View style={{ flex: .3, alignItems: 'center', textAlign: 'right' }}>
              <Text>{rowData.fixture.status.elapsed}'</Text>
              <View>
                <Text>{rowData.goals.home} - {rowData.goals.away}</Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Image
              source={{ uri: `${rowData.teams.away.logo}` }}
              style={{ height: 20, width: 30 }}
            />
            <Text style={{}}>{rowData.teams.away.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};