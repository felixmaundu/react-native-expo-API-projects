import { View, Text, Image, Dimensions, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DiscoverTile from "../../components/DiscoverTile";
import MovieListTile from "../../components/MovieListTile";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@react-navigation/native";
import { colors } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import TvListTile from "../../components/TvListTile";

const SeriesScreen = ({ style, }, props) => {
    // const theme = { mode: "dark" }
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];
    const Width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <SafeAreaView style={{

        }}>
            <ScrollView style={[
                {
                    backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary,

                },
                style,

            ]}

            >
                <View style={{ width: Width, height: height }}>
                    <Text style={{ color: colors.primary }}>series</Text>
                </View>
                {/* <View>

                    <DiscoverTile
                        url="/discover/tv"
                        navigation={props.navigation}
                    />
                </View> */}
                <View>
                <Text
                    style={{
                        color: theme.mode === "dark" ? "red" : colors.tint,
                        margin: 17, fontSize: 20
                    }}
                >now playing movies</Text>
                <TvListTile
                    title="airing today"
                    url="/tv/airing_today"
                    navigation={props.navigation}
                />
            </View>
            </ScrollView>
        </SafeAreaView>

    );
}

export default SeriesScreen;