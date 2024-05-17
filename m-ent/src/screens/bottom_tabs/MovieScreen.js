import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DiscoverTile from "../../components/DiscoverTile";
import MovieListTile from "../../components/MovieListTile";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@react-navigation/native";
import { colors } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import TopPart from "../../components/TopPart";
import CategoryAndNav from "../../components/CategoryAndNavigation";

const MovieScreen = (props) => {

    // const theme = { mode: "dark" }
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];
    // const handlePress = () => {
    //     updateTheme();
    //     setIsActive((previousState) => !previousState);
    // }
    return (
        <ScrollView style={{
            backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
        }}>
            {/* <StatusBar style={ThemeProvider.mode === "dark"? "light":"dark"}/> */}
            <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
        <TopPart
        navigation={props.navigation}
        />
            {/* <View>

                <DiscoverTile
                title = "discover movie"
                    url="/discover/movie"
                    navigation={props.navigation}
                />
            </View> */}


            <View>
               
                
                <CategoryAndNav
                categoryName={'now playing movies'}
                navigation={props.navigation}
                handlePress= {
                    'listMovie'
                }
                />
                <MovieListTile
                    // title="nowplaying Movies"
                    url="/movie/now_playing"
                    navigation={props.navigation}
                    
                />
            </View>


            <View>
            <CategoryAndNav
                categoryName={'latest movies'}
                navigation={props.navigation}
                handlePress= {
                    'listMovie'
                }
                />
               
                <MovieListTile
                    url="/movie/latest"
                    navigation={props.navigation}
                />
            </View>

            <View>
            <CategoryAndNav
                categoryName={'popular movies'}
                navigation={props.navigation}
                handlePress= {
                    'popular'
                }
                />
              
                <MovieListTile
                    url="/movie/popular"
                    navigation={props.navigation}
                    
                />
            </View>

            <View>
            <CategoryAndNav
                categoryName={'top rated movies'}
                navigation={props.navigation}
                handlePress= {
                    'toprated'
                }
                />
                
                <MovieListTile
                    url="/movie/top_rated"
                    navigation={props.navigation}
                />
            </View>

            <View>
            <CategoryAndNav
                categoryName={'upcoming movies'}
                navigation={props.navigation}
                handlePress= {
                    'Upcoming'
                }
                />
               
                <MovieListTile
                    url="/movie/upcoming"
                    navigation={props.navigation}
                />
            </View>


        </ScrollView>
    );
}

export default MovieScreen;