import React from "react";
import { StyleSheet,View,Text, TouchableOpacity, TextInput, Image } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Logo from '../../../assets/Logo.png';
import Icon from '../../../assets/Group23.png';

const Styles = StyleSheet.create({
    Div:{
        flex:1,
        backgroundColor:'#ECF1FA',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    ContentDiv:{
        flex:0.7,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    LogoDiv:{
        flex:0.3,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    Logo:{
        width:146,
        marginBottom:40,
    },
    Text1:{
        fontSize:20,
        fontWeight:'700',
        color:'#000',
        margin:10
    },
    Text2:{
        fontSize:14,
        fontWeight:'500',
        color:'#000',
        marginBottom:20
    },
    Btn1:{
        width:'90%',
        height:43,
        margin:10,
        marginTop:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2A2AC0'
    },
    BtnText1:{
        color:'#fff',
        fontWeight:'700',
    },
    LocationDiv:{
        flexDirection:'row',
        width:'90%',
        backgroundColor:"#fff",
        borderRadius:10,
        // justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:15,
    },
    Location:{
        width:'90%',
        height:40,
    },
    TextIcon:{
        width:14,
        height:18,
        marginRight:10,
    }
});

function Location({navigation}){
    return (
        <SafeAreaProvider style={Styles.Div}>
            <View style={Styles.LogoDiv}>
                <Image source={Logo} style={Styles.Logo} />
            </View>
            <View style={Styles.ContentDiv}>
                <Text style={Styles.Text1}>Location</Text>
                <Text style={Styles.Text2}>Please enter your location</Text>
                <View style={Styles.LocationDiv}>
                    <Image source={Icon} style={Styles.TextIcon} />
                    <TextInput 
                    textContentType="location" 
                    placeholder="Your Location"
                    style={Styles.Location}
                    />
                </View>
                <TouchableOpacity 
                activeOpacity={0.8} 
                style={Styles.Btn1}
                onPress={()=>navigation.navigate('Map')}
                >
                    <Text style={Styles.BtnText1}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    );
}
export default Location;