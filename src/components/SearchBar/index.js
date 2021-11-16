import React from "react";
import {View,TextInput, StyleSheet} from 'react-native';
import {IconButton} from '..';
import SearchBarIcon from '../../../assets/Path8.png';

const styles = StyleSheet.create({
    InputDiv:{
        width:"100%",
        height:45,
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
    },
    Input:{
        width:'90%',
        height:45
    },
    InputIcon:{
        width:20,
        height:20
    }
})
function SearchBar(){
    return (
        <View style={styles.InputDiv}>
            <TextInput 
            style={styles.Input} 
            placeholder="Search"/>
            <IconButton
            iconSource={SearchBarIcon} 
            iconStyle={styles.InputIcon} 
            />
        </View>
    )
}
export default SearchBar;