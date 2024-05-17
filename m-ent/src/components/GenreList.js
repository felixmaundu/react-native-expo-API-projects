import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Loader from '../utils/Loader';
import { useEffect, useState } from 'react';
import { ApiService ,ApiServiceWGenres} from '../../src/service/ApiService';

const GenreList = props=> {
    const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState();

  useEffect(() => {
    const getPeople = async () => {
      const data = await ApiServiceWGenres(props.url,props.genreId);
      setPeople(data.results);
      setLoading(false);
      console.log(data.results);
    };

    getPeople();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={{
            fontSize: 19,
            color: "orange",
            margin: 5,
          }}>{props.title}</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={people}
            
            renderItem={item => displayPeople(item, props)}
            // horizontal
          />
        </View>
      )}
    </View>
  );
};

const displayPeople = ({ item }, props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {
      props.navigation.push('genreScreen',);
    // alert(item.id)
    }}>
     
      <Text style={styles.originalName} numberOfLines={2}>
        {item.id}
      </Text>
      <Text style={styles.characterName} numberOfLines={2}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  image: {
    height: 150,
    width: 100,
    borderRadius: 10,
  },
  originalName: {
    width: 80,
    color: "orange",
    // fontFamily: FONTS.BOLD,
    fontSize: 12,
  },
  characterName: {
    width: 80,

    // fontFamily: FONTS.BOLD,

    color: "orange",
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default GenreList;