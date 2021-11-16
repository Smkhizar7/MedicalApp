import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

function OpacityButton({children,buttonstyle,textstyle,onPress}){
    return(
        <TouchableOpacity activeOpacity={0.7} style={buttonstyle} onPress={onPress}>
          <Text style={textstyle} >{children}</Text>
        </TouchableOpacity>
    )
}
export default OpacityButton;