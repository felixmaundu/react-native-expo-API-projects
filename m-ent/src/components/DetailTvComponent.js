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

import MovieListTileTv from "./MovieListTileTv";
import CastTileTv from "./CastTileTv";
import TrailerTv from "./TrailerTv";

const DetailTvTile = (props) => {
    const { theme } = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState();

    useEffect(() => {
        const getDetails = async () => {
            const data = await ApiService(`/tv/${props.route.params.tvId}`);
            setDetails(data);
            setLoading(false);
        };

        getDetails();
    }, []);


    const getGenre = () => {
        return details.genres.map(genre => (
            <View style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: theme.mode === "dark" ? colors.accent : colors.tint,
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginHorizontal: 10,
            }}>
                <Text style={{
                    color: theme.mode === "dark" ? colors.accent : colors.tint,
                    fontSize: 16,
                }}>{genre.name}</Text>
            </View>
        ));
    };
    const getProductionCompanie = () => {
        return details.production_companies.map(productionCompanie => (
            <View style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: theme.mode === "dark" ? colors.accent : colors.tint,
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginHorizontal: 10,
            }}>
                {details.homepage ? (
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(details.homepage);
                                    }} style={{ flexDirection: 'row', alignContent: 'center' }}>
                                    <Entypo name="link" color={"#0891b2"} size={22} />
                                    <Text style={StyleMain.headingHomePage}>{details.homepage}</Text>
                                </TouchableOpacity>
                            </View>
                        ) : null}
                <Image
                    source={{ uri: `${IMAGE_POSTER_URL}${details.logo_path ? details.logo_path : null}` }}
                    style={{ height: 50, width: 50, borderRadius: 20 }}
                />
                <Text style={{
                    color: theme.mode === "dark" ? colors.accent : colors.tint,
                    fontSize: 16,
                }}>{productionCompanie.name}</Text>
            </View>
        ));
    };
    return (
        <ScrollView style={{
            backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
        }}>

            {loading ? (
                <Loader />
            ) : (
                <View>
                    <Image
                        source={{ uri: `${IMAGE_POSTER_URL}${details.backdrop_path}` }}
                        style={StyleMain.imageBg}
                    />
                    <Text style={{ color: "red", fontSize: 20, marginLeft: 10 }}>{details.name}</Text>
                    <Text style={{ color: "orange", padding: 10 }}>{details.overview}</Text>

                    <View>
                        <Text style={{ color: "red", fontSize: 20, marginLeft: 10 }}>Genres</Text>
                        <ScrollView horizontal>{getGenre()}</ScrollView>
                    </View>
                    <ScrollView horizontal style={StyleMain.detailsContainer}>



                    <View style={{ borderColor: "orange", borderRadius: 10 }}>
                            <Text style={{
                                fontSize: 19,
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                margin: 5,
                            }}>NUMBER OF SEASONS</Text>
                            <Text style={{
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                fontSize: 15,
                                marginStart: 15,
                                fontWeight: 'bold',
                            }}>{details.number_of_seasons}</Text>
                        </View>
                    <View style={{ borderColor: "orange", borderRadius: 10 }}>
                            <Text style={{
                                fontSize: 19,
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                margin: 5,
                            }}>NUMBER OF EPISODES</Text>
                            <Text style={{
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                fontSize: 15,
                                marginStart: 15,
                                fontWeight: 'bold',
                            }}>{details.number_of_episodes}</Text>
                        </View>

                        <View style={{ borderColor: "orange", borderRadius: 10 }}>
                            <Text style={{
                                fontSize: 19,
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                margin: 5,
                            }}>POPULARITY</Text>
                            <Text style={{
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                fontSize: 15,
                                marginStart: 15,
                                fontWeight: 'bold',
                            }}>{details.popularity}</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 19,
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                margin: 5,
                            }}>RUNTIME</Text>
                            <Text style={{
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                fontSize: 15,
                                marginStart: 15,
                                fontWeight: 'bold',
                            }}>{details.runtime}mins</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 19,
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                margin: 5,
                            }}>BUDGET</Text>
                            <Text style={{
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                fontSize: 15,
                                marginStart: 15,
                                fontWeight: 'bold',
                            }}>${details.BUDGET}</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 19,
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                margin: 5,
                            }}>Revenue</Text>
                            <Text style={{
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                fontSize: 15,
                                marginStart: 15,
                                fontWeight: 'bold',
                            }}>${details.revenue}</Text>
                        </View>


                        <View>
                            <Text style={{
                                fontSize: 19,
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                margin: 5,
                            }}>VOTE AVERAGE</Text>
                            <Text style={{
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                fontSize: 15,
                                marginStart: 15,
                                fontWeight: 'bold',
                            }}>{details.vote_average}</Text>
                        </View>

                        <View>
                            <Text style={{
                                fontSize: 19,
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                margin: 5,
                            }}>VOTE COUNT</Text>
                            <Text style={{
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                fontSize: 15,
                                marginStart: 15,
                                fontWeight: 'bold',
                            }}>{details.vote_count}</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 19,
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                margin: 5,
                            }}>STATUS</Text>
                            <Text style={{
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                fontSize: 15,
                                marginStart: 15,
                                fontWeight: 'bold',
                            }}>{details.status}</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 19,
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                margin: 5,
                            }}>RELEASE DATE</Text>
                            <Text style={{
                                color: theme.mode === "dark" ? colors.accent : colors.tint,
                                fontSize: 15,
                                marginStart: 15,
                                fontWeight: 'bold',
                            }}>{details.release_date}</Text>
                        </View>
                    </ScrollView>


                    <View>
                        <Text style={{ color: theme.mode === "dark" ? colors.accent : colors.tint, marginTop: 20, fontSize: 20, marginStart: 20 }}>Homepage link</Text>
                        {details.homepage ? (
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(details.homepage);
                                    }} style={{ flexDirection: 'row', alignContent: 'center' }}>
                                    <Entypo name="link" color={"#0891b2"} size={22} />
                                    <Text style={{
                                        fontSize: 19,
                                        color: theme.mode === "dark" ? colors.accent : colors.tint,
                                        margin: 5,
                                    }}>{details.homepage}</Text>
                                </TouchableOpacity>
                            </View>
                        ) : null}
                    </View>


                    <View>
                        <Text style={{
                            color: theme.mode === "dark" ? colors.accent : colors.tint,
                            marginTop: 20, fontSize: 20,
                            marginStart: 20
                        }}
                        >production companies</Text>
                        <ScrollView horizontal>
                            {getProductionCompanie()}
                        </ScrollView>
                    </View>

                    <View>
                        <CastTileTv
                            title="CAST"
                            url={`/tv/${props.route.params.tvId}/credits`}
                            navigation={props.navigation}
                            isForPage="details"
                        />
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 19,
                            color: theme.mode === "dark" ? colors.accent : colors.tint,
                            margin: 10,
                        }}>Trailer</Text>
                        <TrailerTv
                            title="Trailer"
                            url={`/tv/${props.route.params.tvId}/videos`}
                            navigation={props.navigation}
                        />
                    </View>
                    <View>
                        <Text style={{
                            color: theme.mode === "dark" ? colors.accent : colors.tint,
                            marginTop: 20, fontSize: 20,
                            marginStart: 20
                        }}>similar movies</Text>

                        <MovieListTileTv
                            title="SIMILAR MOVIES"
                            navigation={props.navigation}
                            url={`/tv/${props.route.params.tvId}/similar`}
                        />
                    </View>





                    <View>
                        <Text style={{
                            color: theme.mode === "dark" ? colors.accent : colors.tint,
                            marginTop: 20, fontSize: 20,
                            marginStart: 20
                        }}>Recommendations</Text>
                        <MovieListTileTv
                            title="Recommendations MOVIES"
                            navigation={props.navigation}
                            url={`/tv/${props.route.params.tvId}/recommendations`}
                        />
                    </View>

                </View>
            )}




        </ScrollView>
    );
}

export default DetailTvTile;