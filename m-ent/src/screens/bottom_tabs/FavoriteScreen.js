// import { View,Text,ScrollView } from "react-native";
import { colors } from "../../utils/theme";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import React, {  } from 'react';
import { View, Dimensions} from 'react-native';
import GenresSection from "../../components/GenresSection";


const FavoriteScreen = (props) => {
    const Width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const { theme } = useContext(ThemeContext);
   
  
    return (
      <View style={{backgroundColor:theme.mode === "dark" ? colors.tint: colors.primary,  
      height:height ,
      marginBottom:50 
       }}>


       <GenresSection
        navigation={props.navigation}
       />
      </View>
    );
  };

 

export default FavoriteScreen;
