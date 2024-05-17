import { ThemeContext } from "../../contexts/ThemeContext";
import React, { useContext } from 'react';
import { View, Dimensions} from 'react-native';
import { colors } from "../../utils/theme";


const FavoriteScreen = (props) => {
    const Width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const { theme } = useContext(ThemeContext);
   
  
    return (
      <View style={{backgroundColor:theme.mode === "dark" ? colors.tint: colors.primary,  
      height:height ,
      marginBottom:50 
       }}>


      
      </View>
    );
  };

 

export default FavoriteScreen;
