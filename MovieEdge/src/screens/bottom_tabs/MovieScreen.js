import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DiscoverTile from "../../components/DiscoverTile";
import MovieListTile from "../../components/MovieListTile";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@react-navigation/native";
import { colors } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
const MovieScreen = (props) => {

    // const theme = { mode: "dark" }
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];
    return (
        <ScrollView style={{
            backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
        }}>
            {/* <StatusBar style={ThemeProvider.mode === "dark"? "light":"dark"}/> */}
            <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />

            <View>

                <DiscoverTile
                    url="/discover/movie"
                    navigation={props.navigation}
                />
            </View>


            <View>
                <Text
                    style={{
                        color: theme.mode === "dark" ? "red" : colors.tint,
                        margin: 17, fontSize: 20
                    }}
                >now playing movies</Text>
                <MovieListTile
                    // title="nowplaying Movies"
                    url="/movie/now_playing"
                    navigation={props.navigation}
                />
            </View>


            <View>
                <Text style={{
                    color: theme.mode === "dark" ? "red" : colors.tint,
                    margin: 17, fontSize: 20
                }}>latest movies</Text>
                <MovieListTile
                    url="/movie/latest"
                    navigation={props.navigation}
                />
            </View>

            <View>
                <Text style={{
                    color: theme.mode === "dark" ? "red" : colors.tint,
                    margin: 17, fontSize: 20
                }}>popular movies</Text>
                <MovieListTile
                    url="/movie/popular"
                    navigation={props.navigation}
                />
            </View>

            <View>
                <Text style={{
                    color: theme.mode === "dark" ? "red" : colors.tint,
                    margin: 17, fontSize: 20
                }} >top rated movies</Text>
                <MovieListTile
                    url="/movie/top_rated"
                    navigation={props.navigation}
                />
            </View>

            <View>
                <Text style={{
                    color: theme.mode === "dark" ? "red" : colors.tint,
                    margin: 17, fontSize: 20
                }}>upcoming movies</Text>
                <MovieListTile
                    url="/movie/upcoming"
                    navigation={props.navigation}
                />
            </View>


        </ScrollView>
    );
}

export default MovieScreen;