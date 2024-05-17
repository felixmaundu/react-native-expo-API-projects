import { View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import MovieListTileTv from "../../components/MovieListTileTv";
import TopPartTv from "../../components/TopPartTv";

const SeriesScreen = (props) => {
    // const theme = { mode: "dark" }
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];
    const Width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <ScrollView style={{
            backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
        }}>
            <TopPartTv
                navigation={props.navigation}
            />
            {/* <StatusBar style={ThemeProvider.mode === "dark"? "light":"dark"}/> */}
            <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />

            {/* <View>

                <DiscoverTile
                    url="/discover/tv"
                    // navigation={props.navigation}
                />
            </View> */}


            <View>
                <Text
                    style={{
                        color: theme.mode === "dark" ? "red" : colors.tint,
                        margin: 17, fontSize: 20
                    }}
                >airing today</Text>
                <MovieListTileTv
                    url="/tv/airing_today"
                    navigation={props.navigation}
                />
            </View>
            <View>
                <Text
                    style={{
                        color: theme.mode === "dark" ? "red" : colors.tint,
                        margin: 17, fontSize: 20
                    }}
                >airing today</Text>
                <MovieListTileTv
                    url="/tv/on_the_air"
                    navigation={props.navigation}
                />
            </View>
            <View>
                <Text
                    style={{
                        color: theme.mode === "dark" ? "red" : colors.tint,
                        margin: 17, fontSize: 20
                    }}
                >airing today</Text>
                <MovieListTileTv
                    url="/tv/popular"
                    navigation={props.navigation}
                />
            </View>
            <View>
                <Text
                    style={{
                        color: theme.mode === "dark" ? "red" : colors.tint,
                        margin: 17, fontSize: 20
                    }}
                >airing today</Text>
                <MovieListTileTv
                    url="/tv/top_rated"
                    navigation={props.navigation}
                />
            </View>














        </ScrollView>

    );
}

export default SeriesScreen;