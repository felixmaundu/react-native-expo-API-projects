
// import { View,Text,ScrollView } from "react-native";
import { colors } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import GenreList from "../../components/GenreList";
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const FavoriteScreen = () => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [currentGenre, setCurrentGenre] = useState('');
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=53939b3da3d575c42c212fb77c52c5a5', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'api_key': '53939b3da3d575c42c212fb77c52c5a5'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const fetchMovies = (id) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=53939b3da3d575c42c212fb77c52c5a5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <FlatList
        data={genres}
        horizontal
        renderItem={({ item }) => (
          <Text
            style={{ padding: 10, fontWeight: 'bold' }}
            onPress={() => fetchMovies(item.id)}>
            {item.name}
          </Text>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <FlatList
        data={movies}
        renderItem={({ item }) => <Text style={{ padding: 10 , color:'black'}}>{item.title}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default FavoriteScreen;

