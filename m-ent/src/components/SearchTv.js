import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity,Image, Text, FlatList ,StyleSheet, SafeAreaView,Dimensions} from 'react-native';
import { colors } from "../utils/theme";
import { POSTER_IMAGE, ANOTHER_IMAGE, IMAGE_POSTER_URL } from '../utils/Config';
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import StyleMain from '../utils/StyleMain';

const SearchTv = (props) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSearch = async () => {
    try {
      const apiKey = '53939b3da3d575c42c212fb77c52c5a5';
      const url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${searchText}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setSearchResults(responseJson.results);
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred while searching movies. Please try again later.");
    }
  }
  const { theme } = useContext(ThemeContext);
  const Width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <SafeAreaView  style={{
        backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
    }}>
        <View style={{marginTop:20,width:Width,height:height  }}>

       
      <TextInput
        style={{color: theme.mode === "dark" ? colors.primary : colors.tint,
            padding: 10,
            margin: 10,
            borderWidth: 1,
            borderColor: '#ccc'}}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholder="search series"
        placeholderTextColor={theme.mode === "dark" ? colors.primary : colors.tint}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
      { errorMessage !== null ? 
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View> : 
        <FlatList
          data={searchResults}
          keyExtractor={item => item.id}
        //   renderItem={({ item }) => <Text>{item.title}</Text>}
        renderItem={item => displayMovies(item, props)}
        />
      }
       </View>
    </SafeAreaView>
  );
};

const displayMovies = ({ item, theme }, props) => {
    // const {theme} = useContext(ThemeContext);
    // let activeColors = colors[theme.mode];
    // const isInFavorites = favorites.findIndex(m => m.id === item.id);
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.push('tvDetails', { tvId: item.id });
        }}
        style={{ marginHorizontal: 5, flexDirection: 'row', padding: 10 }}
      >
  
        <View style={{ marginRight: 3 }}>
          <Image
            source={{ uri: `${IMAGE_POSTER_URL}${item.poster_path}` }}
            style={StyleMain.posterImage}
          />
        </View>
  
        <View style={{ flexDirection: 'column' }}>
          <View style={StyleMain.rowAndCenter}>
            {/* <TouchableOpacity onPress={() => toggleFavorite(item)}>
              <Ionicons
                name={isInFavorites !== -1 ? "heart" : "heart-outline"}
                size={17}
                color={isInFavorites !== -1 ? "red" : "gray"}
                style={{
                  marginRight: 3,
                  marginTop: 3
                }}
              />
            </TouchableOpacity> */}
            <Ionicons
              name="heart"
              size={17}
              color={'red'}
              style={{
                marginRight: 3,
                marginTop: 3
              }}
            />
            <Text style={StyleMain.vote_count}>{item.vote_count}</Text>
          </View>
          <Text style={{
            color: "orange",
            width: 150,
            textAlign: 'left',
            marginTop: 1,
            fontSize: 16,
          }} numberOfLines={2} ellipsizeMode='tail'>{item.title}</Text>
          <Text style={{
            color: "orange",
            width: 150,
            textAlign: 'left',
            marginTop: 1,
            fontSize: 16,
          }} numberOfLines={2} ellipsizeMode='tail'>Pop. {item.popularity}</Text>
          <Text style={{
            color: "orange",
            width: 150,
            textAlign: 'left',
            marginTop: 1,
            fontSize: 16,
          }} numberOfLines={2} ellipsizeMode='tail'>Released:{item.release_date}</Text>
          <Text style={{
            color: "orange",
            width: 150,
            textAlign: 'left',
            marginTop: 1,
            fontSize: 16,
          }} numberOfLines={2} ellipsizeMode='tail'>Language:{item.original_language}</Text>
        </View>
  
      </TouchableOpacity>
    );
  };
const styles = StyleSheet.create({
  input: {
    // color:
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  searchButton: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10
  },
  searchButtonText: {
    color: 'white',
    textAlign: 'center'
  },
  errorContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
  }
});

export default SearchTv;
