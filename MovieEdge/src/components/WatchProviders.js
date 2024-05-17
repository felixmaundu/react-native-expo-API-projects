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
import IMAGES from "../utils/Images";

const WatchProviders =(props)=> {
    const [loading, setLoading] = useState(true);
    const [people, setPeople] = useState();
  
    useEffect(() => {
      const getPeople = async () => {
        const data = await ApiService(props.url);
        setPeople(data.results);
        setLoading(false);
      };
  
      getPeople();
    }, []);
  
    return (
      <View>
        {loading ? (
          <Loader />
        ) : (
          <View>
            <Text style={{fontSize: 19,
    color: "orange",
    margin: 5,}}>{props.title}</Text>
            <FlatList
              keyExtractor={item => item.id}
              data={people}
              renderItem={displayPeople}
              horizontal
            />
          </View>
        )}
      </View>
    );
  };
  
  const displayPeople = ({item}) => {
    return (
      <TouchableOpacity style={styles.container}  onPress={() => {
        // props.navigation.push('movieDetails', {movieId: item.id});
       }}>
      <Image
      source={{uri: `${IMAGE_POSTER_URL}${item.logo_path}`}}
        // source={image ? { uri: getPoster(image) } : IMAGES.NO_IMAGE}
        // resizeMode={image ? "cover" : "contain"}
        resizeMode={"cover"}
        style={styles.image}
      />
      <Text style={styles.originalName} numberOfLines={2}>
        {item.original_name}
      </Text>
      <Text  style={styles.characterName} numberOfLines={2}>{item.provider_name}</Text>
    </TouchableOpacity>
    );
  };
  









const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15
  },
  image: {
    height: 170,
    width: 115,
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
   
    color:  "orange",
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default WatchProviders;