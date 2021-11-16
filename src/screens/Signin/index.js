import React from "react";
import { StyleSheet,View,Text, TouchableOpacity, TextInput, Image } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {PhoneNumber} from '../../components';
import Logo from '../../../assets/Logo.png'

const Styles = StyleSheet.create({
    Div:{
        flex:1,
        backgroundColor:'#ECF1FA',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    LogoDiv:{
        flex:0.3,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    Logo:{
        width:146,
        height:99,
    },
    ContentDiv:{
        flex:0.7,
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:40,
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
        height:40,
        margin:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2A2AC0'
    },
    BtnText1:{
        color:'#fff',
        fontWeight:'700',
    },
    Btn2:{
        width:'90%',
        height:40,
        margin:10,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3A559F'
    },
    BtnText2:{
        color:'#fff',
        fontSize:18,
        fontWeight:'900',
    },
    BtnText4:{
        color:'#fff',
        fontWeight:'900',
    },
    BottomDiv:{
        flexDirection:'row',
        alignSelf:'center',
        marginBottom:40,
    },
    Text3:{
        color:'#000',
        fontSize:14,
    },
    Btn3:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
    },
    BtnText3:{
        color:'#000',
        fontSize:14,
        textAlign:'center',
        textAlignVertical:'bottom',
        color:'#2A2AC0',
    }
});

function SignIn({navigation}){
    return (
        <SafeAreaProvider style={Styles.Div}>
            <View style={Styles.LogoDiv}>
                <Image source={Logo} style={Styles.Logo} />
            </View>
            <View style={Styles.ContentDiv}>
                <Text style={Styles.Text1}>Mobile Number</Text>
                <Text style={Styles.Text2}>The code will be sent to the full mobile number</Text>
                <PhoneNumber />
                <TouchableOpacity 
                activeOpacity={0.8} 
                style={Styles.Btn1}
                onPress={()=>navigation.navigate('Verification')}
                >
                    <Text style={Styles.BtnText1}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    );
}
export default SignIn;