import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import MatchListTile from "../../components/MatchListTile";
import { View } from "react-native";

const HomeScreen = (props) => {

    // const theme = { mode: "dark" }
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];
    // const handlePress = () => {
    //     updateTheme();
    //     setIsActive((previousState) => !previousState);
    // }
    return (
        <View style={{
            backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
        }}>
            {/* <StatusBar style={ThemeProvider.mode === "dark"? "light":"dark"}/> */}
            <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
            <MatchListTile/>
       
        </View>
    );
}

export default HomeScreen;