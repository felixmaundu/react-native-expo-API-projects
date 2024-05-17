import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import {POSTER_IMAGE} from '../config';
import { ApiServiceGetCountry } from '../service/ApiService';
// import Styles from '../Styles';
import Loader from './Loader';

const CountryList = props => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState();

  useEffect(() => {
    const getMatches = async () => {
      const data = await ApiServiceGetCountry(props.countryEndpoint);
      setCountries(data.response);
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
        <ScrollView>
          <FlatList
            keyExtractor={item => item.id}
            data={countries}

            // horizontal
            renderItem={item => displayMatches(item, props)}
          />
        </ScrollView>
      )}
    </View>
  );
};

const displayMatches = ({ item }, props) => {
  return (
    <TouchableOpacity
      //   onPress={() => {
      //     props.navigation.navigate('movieDetails', {movieId: item.id});//push navigate
      //   }}
      style={{ height: 60 }}
    >
      <View>
          <Text>{item.name}</Text>
        </View>
    
    </TouchableOpacity>
  );
};

export default CountryList;
