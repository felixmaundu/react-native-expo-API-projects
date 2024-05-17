import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome, Feather } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { colors } from "../utils/theme";
import { ThemeContext } from "../contexts/ThemeContext";
const SettingsButton = ({ modeiconlabel, label, isActive, ...props }) => {
    // const theme = {mode:"dark"}
    const {theme} = useContext(ThemeContext)
        // label, icon, isActive, ...props
    // const [isActive, setIsActive]= useState();
    // response.results.map
    return (
        <TouchableOpacity
            {...props}
        >

            <View>
                <TouchableOpacity
                    style={{ backgroundColor: theme.mode === "dark" ? colors.tint : colors.primary, flexDirection: 'row', 
                    justifyContent: 'space-between' }}
                >

                    <View style={{ flexDirection: 'row', marginStart: 15, }}>
                        <MaterialCommunityIcons
                            name={modeiconlabel}

                            size={24} color="green" />
                        <Text style={{ marginLeft: 10 }}>
                            {label}
                        </Text>

                    </View>
                    <View>

                        <MaterialCommunityIcons name={isActive ? "checkbox-marked-circle" :
                            "checkbox-blank-circle-outline"} size={24} color={isActive ? "red" 
                            : "green"} />
                    </View>
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    );
}

export default SettingsButton;