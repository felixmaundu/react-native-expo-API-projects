import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome, Feather } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const CategoryAndNav = ({ categoryName,handlePress,...props}) => {//navigation//...props 
    const { theme } = useContext(ThemeContext);
    return (
        <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <Text
                style={{
                    color: theme.mode === "dark" ? "red" : colors.tint,
                    margin: 17, fontSize: 20
                }}>{categoryName}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{
                    color: theme.mode === "dark" ? "green" : colors.tint,
                    fontSize: 15,
                
                }} 
                onPress={() => {
                    
                    props.navigation.push(`${handlePress}`);
                   }}
                // onPress={handlePress}
                > see more </Text>
                <MaterialIcons name="arrow-right" color={theme.mode === "dark" ? "green" : 'black'} size={26} 
                //  onPress={() => {
                //     props.navigation.push('listMovie',{name:'jane'});
                //    }}
                
                />
            </View>
        </TouchableOpacity>
    );
}

export default CategoryAndNav;