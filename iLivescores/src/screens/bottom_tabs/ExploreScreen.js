import { ScrollView } from "react-native";
import { colors } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const ExploreScreen = (props) => {

    // const theme = { mode: "dark" }
    const { theme } = useContext(ThemeContext);
    return (
        <ScrollView style={{
            backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary
        }}>
       

    </ScrollView>
    );
}

export default ExploreScreen;