import { View, Text, Dimensions, SafeAreaView } from "react-native";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome, Feather ,AntDesign} from "@expo/vector-icons";
const TopPart = (props) => {
    const width = Dimensions.get('window').width;
    return (
        <View style={{
            flex: 1,
            height: 80,
            // backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection:'row'
            // height: 50,justifyContent:'center',alignContent:"center"
        }}>

            <Text style={{
                color: "orange",
                justifyContent: "center",
                fontSize: 40
            }}>Discover</Text>

<AntDesign name="search1" color={'orange'} size={26} onPress={() => {
                props.navigation.push('searchMovie');
            }}/>

        </View>

    );
}

export default TopPart;