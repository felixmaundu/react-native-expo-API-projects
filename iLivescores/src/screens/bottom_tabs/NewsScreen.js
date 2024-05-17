import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const NewsScreen = (props) => {
    // const theme = { mode: "dark" }
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];
    const Width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <ScrollView style={{
            backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
        }}>
           
           
            <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />

           




        </ScrollView>

    );
}

export default NewsScreen;