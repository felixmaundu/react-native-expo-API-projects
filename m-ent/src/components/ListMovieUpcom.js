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

const ListMovieUpcom = (props, { navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [pageCurrent, setPageCurrent] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

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
        const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=53939b3da3d575c42c212fb77c52c5a5&page=${pageCurrent}`;
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
            setErrorMessage("An error occurred while fetching movies. Please try again later."); //set error message
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (hasMore) {
            getMovies();
        }
    }, [pageCurrent, hasMore]);
    const {theme} = useContext(ThemeContext);
    return (
        <View style={{
            backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
        }}>

            {errorMessage !== null ?
                <View style={styles.errorContainer}>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                </View> :
                loading ? (
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


export default ListMovieUpcom;