import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Loader from '../utils/Loader';
import { useEffect, useState } from 'react';
import { POSTER_IMAGE, ANOTHER_IMAGE, IMAGE_POSTER_URL } from '../utils/Config';
import StyleMain from '../utils/StyleMain';
import { ApiService } from '../../src/service/ApiService';
import ItemSeparator from '../utils/ItemSeparator';
import { Ionicons } from "@expo/vector-icons";

const MovieListTile = props => {
    const [loading, setLoading] = useState(true);
    const [latest, setLatest] = useState({});

    useEffect(() => {
        const getMovieOrSersies = async () => {
            const data = await ApiService(props.url);
            setLatest(data);
            console.log(data)
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
                    <Text>hello</Text>
                    <TouchableOpacity
                        onPress={() => {
                            // props.navigation.push('movieDetails', {movieId: item.id});
                        }}
                        style={{ marginHorizontal: 10,height:100, width:100 }}>
                            <Text>hello</Text>
                        <Image
                            source={{ uri: `${IMAGE_POSTER_URL}${latest.poster_path}` }}
                            style={StyleMain.posterImage}
                        />
                        <View style={StyleMain.rowAndCenter}>
                            <Ionicons
                                name="heart"
                                size={17}
                                color={'yellow'}
                                style={{
                                    marginRight: 3,
                                    marginTop: 3
                                }}
                            />
                            <Text style={StyleMain.vote_count}>{item.vote_count}</Text>
                        </View>
                        <Text style={StyleMain.movieTitle}>{item.title}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const displayMovies = ({ item }, props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                // props.navigation.push('movieDetails', {movieId: item.id});
            }}
            style={{ marginHorizontal: 10 }}>
            <Image
                source={{ uri: `${IMAGE_POSTER_URL}${item.poster_path}` }}
                style={StyleMain.posterImage}
            />
            <View style={StyleMain.rowAndCenter}>
                <Ionicons
                    name="heart"
                    size={17}
                    color={'yellow'}
                    style={{
                        marginRight: 3,
                        marginTop: 3
                    }}
                />
                <Text style={StyleMain.vote_count}>{item.vote_count}</Text>
            </View>
            <Text style={StyleMain.movieTitle}>{item.title}</Text>
        </TouchableOpacity>
    );
};
export default MovieListTile;