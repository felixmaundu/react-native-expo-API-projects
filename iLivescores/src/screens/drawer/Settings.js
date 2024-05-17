import { useState, useEffect } from "react";
import { View, Text, Switch, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { colors } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";


// import SettingsItem from "../../components/SettingsItem";
import SettingsButton from "../../components/SettingsButton";
// import { Switch } from "react-native-gesture-handler";

const Setting = (props) => {
    // const theme = { mode: "dark" }
    const Width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const { theme, updateTheme } = useContext(ThemeContext);
    const activeColorsConst = colors[theme.mode];
    // response.results.map
    const [isActive, setIsActive] = useState(theme.mode === "dark");
    const handleSwitch = () => {
        updateTheme();
        setIsActive((previousState) => !previousState);
    }
    return (
        <SafeAreaView style={{

        }}>
            <ScrollView style={{ backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary, width: Width, height: height }}>
                <Text>hello</Text>
                <View>
                    <SettingsButton
                        modeiconlabel={"lightbulb-on"}
                        label={"light"}
                        isActive={theme.mode === "light" && !theme.system}
                        onPress={
                            () =>
                                updateTheme({ mode: "light" })
                            // console.log("pressed")
                        }
                    />
                    <SettingsButton
                        modeiconlabel={"weather-night"}
                        label={"dark"}
                        isActive={theme.mode === "dark" && !theme.system}
                        onPress={
                            // console.log("pressed")
                            () => updateTheme({ mode: "dark" })
                            // updateTheme({ mode: "light" })
                        }
                    />
                    <SettingsButton
                        modeiconlabel={"theme-light-dark"}
                        label={"system"}
                        isActive={theme.system}
                        onPress={() => updateTheme({ system: true })}
                    />



                </View>

                <View style={{}}>
                    <Text style={{ color: colors.primary }}>
                        hello settings
                    </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                        <Text style={{ color: theme.mode === "dark" ? colors.primary : colors.tint }}>change theme</Text>
                        <Switch
                            backgroundColor={theme.mode === "dark" ? colors.tint : colors.primary}
                            value={isActive}
                            onValueChange={handleSwitch}
                            thumbColor={isActive ? colors.accent : colors.tertiary}
                            trackColor={{
                                false: colors.primary,
                                true: colors.tertiary
                            }}
                        />
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
}

export default Setting;