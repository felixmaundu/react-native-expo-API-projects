import { View,Text,ScrollView } from "react-native";
import { colors } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import CastTile from "../../components/CastTile";
import WatchProviders from "../../components/WatchProviders";

const PersonsScreen = (props) => {

    // const theme = { mode: "dark" }
    const { theme } = useContext(ThemeContext);
    return (
        <ScrollView style={{
            backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
        }}>
        <Text>casts</Text>
        <CastTile
         title="latest characters"
         url="/person/latest"
         navigation={props.navigation}
        />
        <CastTile
         title="popular characters"
         url="/person/popular"
         navigation={props.navigation}
        />
        <WatchProviders
         title="watch providers"
         url="/watch/providers/movie"
         navigation={props.navigation}
        />

    </ScrollView>
    );
}

export default PersonsScreen;