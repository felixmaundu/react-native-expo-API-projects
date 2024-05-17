import { SafeAreaView, ScrollView, Text, View, Image, Linking, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from 'react';
import { ApiService } from '../../src/service/ApiService';
import { POSTER_IMAGE, ANOTHER_IMAGE, IMAGE_POSTER_URL } from '../utils/Config';
import StyleMain from '../utils/StyleMain';
import Loader from '../utils/Loader';
import { colors } from "../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome, Feather, Entypo } from "@expo/vector-icons";
import MovieListTile from "./MovieListTile";
import CastTile from "./CastTile";
import Trailer from "./Trailer";

const GenreItem = (props) => {
    const { theme } = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState();

    useEffect(() => {
        const getDetails = async () => {
            const data = await ApiService(`/movie/${props.route.params.genreId}`);
            setDetails(data);
            setLoading(false);
        };

        getDetails();
    }, []);


    // const getGenre = () => {
    //     return details.genres.map(genre => (
    //         <View style={{
    //             borderWidth: 1,
    //             borderRadius: 5,
    //             borderColor: theme.mode === "dark" ? colors.accent : colors.tint,
    //             paddingHorizontal: 10,
    //             paddingVertical: 5,
    //             marginHorizontal: 10,
    //         }}>
    //             <Text style={{
    //                 color: theme.mode === "dark" ? colors.accent : colors.tint,
    //                 fontSize: 16,
    //             }}>{genre.name}</Text>
    //         </View>
    //     ));
    // };

    return (
        <ScrollView style={{
            backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
        }}>

            {loading ? (
                <Loader />
            ) : (
                <View>
                   
                    <Text style={{ color: "red", fontSize: 20, marginLeft: 10 }}>{details.name}</Text>
                  

                   

                </View>
            )}




        </ScrollView>
    );
}

export default GenreItem;