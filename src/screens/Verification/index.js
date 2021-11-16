import React from "react";
import { StyleSheet,View,Text, TouchableOpacity, TextInput, Image } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UnderlineExample } from '../../components';
import Logo from '../../../assets/Logo.png';

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
    Div2:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    BtnText2:{
        color:'#2A2AC0',
        fontSize:14,
    },
    BtnText3:{
        color:'#2A2AC0',
        fontSize:14,
    },
    Input:{
        width:'90%',
        backgroundColor:"#fff",
        paddingHorizontal:15,
        borderRadius:10,
        margin:10,
    },
});

function Verification({navigation}){
    return (
        <SafeAreaProvider style={Styles.Div}>
            <View style={Styles.LogoDiv}>
                <Image source={Logo} style={Styles.Logo} />
            </View>
            <View style={Styles.ContentDiv}>
                <Text style={Styles.Text1}>Verification</Text>
                <Text style={Styles.Text2}>Insert your code here:</Text>
                <UnderlineExample />
                <TouchableOpacity 
                activeOpacity={0.8} 
                style={Styles.Btn1}
                onPress={()=>navigation.navigate('Location')}
                >
                    <Text style={Styles.BtnText1}>Continue</Text>
                </TouchableOpacity>
                <View style={Styles.Div2}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    // onPress={()=>navigation.navigate('verification')}
                    >
                        <Text style={Styles.BtnText2}>Resend code</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    // onPress={()=>navigation.navigate('verification')}
                    >
                        <Text style={Styles.BtnText3}>Change Number</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaProvider>
    );
}
export default Verification;