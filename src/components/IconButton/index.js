import React from 'react';
import { Image, TouchableOpacity} from 'react-native';

function IconButton({iconSource,iconStyle,buttonStyle,onPress}){
    return(
        <TouchableOpacity activeOpacity={0.7} style={buttonStyle} onPress={onPress}>
          <Image source={iconSource} style={iconStyle} />
        </TouchableOpacity>
    )
}
export default IconButton;