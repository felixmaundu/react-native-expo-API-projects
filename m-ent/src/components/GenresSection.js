// import { View,Text,ScrollView } from "react-native";
import { colors } from "../utils/theme";
import { IMAGE_POSTER_URL } from '../utils/Config';
import StyleMain from '../utils/StyleMain';
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';


const GenresSection = (props) => {
  const Width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const { theme } = useContext(ThemeContext);
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [currentGenre, setCurrentGenre] = useState('');

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=53939b3da3d575c42c212fb77c52c5a5', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        //   'api_key': 'your_api_key'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const fetchMovies = (id, genreName) => {
    fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=53939b3da3d575c42c212fb77c52c5a5&with_genres=${id}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setCurrentGenre(genreName);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={{
      backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary,
      //height:height ,
      marginBottom: 50
    }}>
      <View style={{ marginTop: 20, margin: 15 }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
          color: theme.mode === "dark" ? "green" : colors.tint,
        }}> Genres</Text>
      </View>


      <FlatList
        data={genres}

        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => fetchMovies(item.id, item.name)}>
            <View style={{
              backgroundColor: theme.mode === "dark" ? "orange" : colors.tint,
              padding: 10,
              margin: 5,

              borderRadius: 10,
              height: 60,
              alignItems: 'center',
            }}>
              <Text style={{

                fontWeight: 'bold',

                color: theme.mode === "dark" ? "green" : colors.tint,
              }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      //   keyExtractor={item => item.id.toString()}
      />
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        color: theme.mode === "dark" ? "green" : colors.tint,
      }}>{`Movies of ${currentGenre} genre`}</Text>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        //   renderItem={({ item }) => <Text style={styles.movieText}>{item.title}</Text>}
        renderItem={item => displayMovies(item, props)}
      //   keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const displayMovies = ({ item, }, props) => {
  // const {theme} = useContext(ThemeContext);
  // let activeColors = colors[theme.mode];
  // const isInFavorites = favorites.findIndex(m => m.id === item.id);
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.push('movieDetails', { movieId: item.id });
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

const styles = {

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  genreContainer: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  genreText: {
    fontWeight: 'bold',
  },
  movieText: {
    margin: 10,
    fontSize: 16,
  }
}

export default GenresSection;
