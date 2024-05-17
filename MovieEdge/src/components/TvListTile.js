import {View, Text,Image,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import Loader from '../utils/Loader';
import { useEffect,useState } from 'react';
import { POSTER_IMAGE,ANOTHER_IMAGE,IMAGE_POSTER_URL } from '../utils/Config';
import StyleMain from '../utils/StyleMain';
import { ApiService } from '../../src/service/ApiService';
import ItemSeparator from '../utils/ItemSeparator';
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const TvListTile=props=>{
  const {theme} = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState();
  
    useEffect(() => {
      const getMovieOrSersies = async () => {
        const data = await ApiService(props.url);
        setNowPlaying(data.results);
        setLoading(false);
      };
  
      getMovieOrSersies();
    }, []);
  
    return (
      <View>
        {loading ? (
          <Loader />
        ) : (
          <View>
            {/* <Text style={Styles.heading}>{props.title}</Text> */}
            <FlatList
              keyExtractor={item => item.id}
              data={nowPlaying}
              horizontal
              ItemSeparatorComponent={() => <ItemSeparator width={15} />}
              ListHeaderComponent={() => <ItemSeparator width={5} />}
              ListFooterComponent={() => <ItemSeparator width={20} />}
              renderItem={item => displayMovies(item, props)}
            />
          </View>
        )}
      </View>
    );
  };
  
  const displayMovies = ({item,theme}, props) => {
    // const {theme} = useContext(ThemeContext);
    // let activeColors = colors[theme.mode];
    return (
      <TouchableOpacity
        onPress={() => {
        //  props.navigation.push('movieDetails', {movieId: item.id});
        }}
        style={{marginHorizontal: 10}}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${item.poster_path}`}}
          style={StyleMain.posterImage}
        />
         <View style={StyleMain.rowAndCenter}>
         <Ionicons
              name="heart"
              size={17 }
              color={'yellow'}
              style={{ marginRight: 3,
            marginTop:3 }}
            />
            <Text style={StyleMain.vote_count}>{item.vote_count}</Text>
            </View>
        <Text style={{  
    color: "orange",
    width: 150,
    textAlign: 'center',
    marginTop: 1,
    fontSize: 16,}}  numberOfLines={2} ellipsizeMode='tail'>{item.name}</Text>
      </TouchableOpacity>
    );
  };
export default TvListTile;