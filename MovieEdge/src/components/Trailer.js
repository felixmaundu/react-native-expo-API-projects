import YoutubePlayer from 'react-native-youtube-iframe';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';
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


const Trailer = props => {
    const [loading, setLoading] = useState(true);
    const [videoTrailer, setVideoTrailer] = useState(false);
    // const [playing, setPlaying] = useState(false);

    // const togglePlaying = () => {
    //   setPlaying((prev) => !prev);
    // }



    useEffect(() => {
        const getVideoTrailer = async () => {
            const data = await ApiService(props.url);
            setVideoTrailer(data.results);
            setLoading(false);

        };

        getVideoTrailer();
    }, []);

    return (
        <View>
            {loading ? (
                <Loader />
            ) : (
                <View>

                    <FlatList
                        keyExtractor={item => item.id}
                        data={videoTrailer}//playing
                        horizontal
                        ItemSeparatorComponent={() => <ItemSeparator width={15} />}
                        ListHeaderComponent={() => <ItemSeparator width={5} />}
                        ListFooterComponent={() => <ItemSeparator width={10} />}
                        renderItem={item => displayMovies(item, props)}
                    />
                </View>
            )}
        </View>
    );
};

const displayMovies = ({ item }, props) => {

    return (
        <TouchableOpacity>


            <View style={StyleMain.videoContainer}>


                <YoutubePlayer
                    height={300}
                    play={false}
                    videoId={`${item.key}`}
                />
                {/* <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} /> */}


            </View>
            <Text style={StyleMain.details}>Site : {item.site}</Text>
            <Text style={StyleMain.details}>{item.name}</Text>
        </TouchableOpacity>
    );
};
export default Trailer;







