import { Text, View } from "react-native";


const SettingsItem = ({ children, label }) => {
    return (
        <View>
            <Text>{label}</Text>
        </View>
    );
}

export default SettingsItem;