import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Loader from '../utils/Loader';
import { useEffect, useState } from 'react';
import { POSTER_IMAGE, ANOTHER_IMAGE, IMAGE_POSTER_URL } from '../utils/Config';
import StyleMain from '../utils/StyleMain';
import { ApiService } from '../../src/service/ApiService';
import ItemSeparator from '../utils/ItemSeparator';
import { Ionicons } from "@expo/vector-icons";

import Carousel from 'react-native-reanimated-carousel';

const DiscoverTile = props => {
    const [movies, setMovies] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const response = await ApiService(props.url);
            setMovies(response.results);

              const images = response.results.map(
                data => (`${IMAGE_POSTER_URL}${data.poster_path}`),
                
              );

            //   let backImages = [];
            //   for (let i = 0; i < 10; ++i) {
            //     backImages = [...backImages, images[i]];
            //   }

            setImages(images);//backImages
            console.log(images)
        };

        getMovies();
    }, []);

    const Width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <View style={{paddingBottom:20, paddingTop:30}}>
           <View style={{height:450, width:Width}}>
           <Carousel
                data={images}
                scrollAnimationDuration={2000}
                autoPlay={true}
                
                width={Width}
                height={449}
                onSnapToItem={
                    index =>
                    props.navigation.navigate('movieDetails', {movieId: movies[index].id})
                  }
                renderItem={({ item }) => (
                    <View>
                        <Image
                            source={{ uri: `${IMAGE_POSTER_URL}${item}` }}
                            style={{ height: '100%',width: '100%',resizeMode:'cover'}}
                            
                        />

                    </View>
                )}
            />
           </View>
           
     
        </View>
    );
};

export default DiscoverTile;
