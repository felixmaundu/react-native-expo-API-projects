import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Loader from '../utils/Loader';
import { useEffect, useState } from 'react';
import { POSTER_IMAGE, ANOTHER_IMAGE, IMAGE_POSTER_URL } from '../utils/Config';
import StyleMain from '../utils/StyleMain';
import { ApiService } from '../../src/service/ApiService';
import ItemSeparator from '../utils/ItemSeparator';
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


const MovieListTileAll = props => {
  const [loading, setLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = () => {
    setLoading(true);
    setPageCurrent(pageCurrent + 1);
  }

  const renderFooter = () => {
    return (
      loading ?
        <View style={StyleMain.loader}>
          <ActivityIndicator size="large" color='#aaa' />
        </View> : null
    );
  }

  const getMovies = async () => {
    const apiURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=53939b3da3d575c42c212fb77c52c5a5&page=${pageCurrent}`;
    try {
      const response = await fetch(apiURL);
      const responseJson = await response.json();
      if (responseJson.results.length === 0) {
        setHasMore(false);
      } else {
        setNowPlaying([...nowPlaying, ...responseJson.results]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (hasMore) {
      getMovies();
    }
  }, [pageCurrent, hasMore]);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <FlatList
            data={nowPlaying}
            keyExtractor={item => item.id}
            renderItem={item => displayMovies(item, props)}
            ListFooterComponent={renderFooter}
            onEndReached={loading || !hasMore ? null : handleLoadMore}
            onEndReachedThreshold={0}
          />


        </View>
      )}
    </View>
  );
};
const displayMovies = ({ item, theme }, props) => {
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
export default MovieListTileAll;


//   const { theme } = useContext(ThemeContext);
//   const [loading, setLoading] = useState(true);
//   const [nowPlaying, setNowPlaying] = useState([]);
//   const [pageCurrent, setPageCurrent] = useState(props.pageCurrent || 1);
//   const [totalPages, setTotalPages] = useState(null);
//   const [favorites, setFavorites] = useState([]);




//   const renderFooter = () => {
//     return loading ? (
//       <View style={StyleMain.loader}>
//         <ActivityIndicator size="large" color="#aaa" />
//       </View>
//     ) : null;
//   };


//   const handleLoadMore = async () => {
//     console.log("load more item");
//     console.log(pageCurrent, totalPages);
//     setLoading(true);
//     if (pageCurrent < totalPages) {
//       setPageCurrent(pageCurrent + 1);
//       const data = await ApiService(props.url, pageCurrent);
//       setNowPlaying([...nowPlaying, ...data.results]);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     const getMovieOrSersies = async () => {
//       const data = await ApiService(props.url, pageCurrent);
//       console.log(data.page);
//       setNowPlaying(data.results);
//       setTotalPages(data.total_pages);
//       setLoading(false);
//     };

//     getMovieOrSersies();
//   }, [pageCurrent]);


//   return (
//     <View>
//       {loading ? (
//         <Loader />
//       ) : (
//         <View>
//           <FlatList
//             keyExtractor={item => item.id}
//             data={nowPlaying}
//             ItemSeparatorComponent={() => <ItemSeparator width={15} />}
//             ListHeaderComponent={() => <ItemSeparator width={5} />}
//             ListFooterComponent={renderFooter}
//             onEndReached={handleLoadMore}
//             onEndReachedThreshold={0}
//             renderItem={item => displayMovies(item, props)}
//           />

//         </View>
//       )}
//     </View>
//   );
// };