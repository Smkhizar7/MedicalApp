import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,Image, ScrollView
} from 'react-native';
import BackIcon from '../../../assets/Path240.png';
import UserIcon from '../../../assets/user.png';
import { IconButton,OpacityButton} from '../../components';
import Card1 from '../../../assets/Card1.png';
import Card2 from '../../../assets/Card.png';
import Location from '../../../assets/Group23.png';

const styles = StyleSheet.create({
    MainDiv:{
        flex:1,
        padding:10,
        backgroundColor:'#ECF1FA'
    },
    Header:{
        flex:0.1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Div1:{
        flex:0.2,
        margin:10,
        justifyContent:'flex-start',
    },
    Div2:{
        flex:0.7,
    },
    BackIcon:{
        width:15,
        height:20
    },
    UserIcon:{
        width:25,
        height:25
    },
})
function AppointmentConfirmation({navigation}){
    return (
        <View style={styles.MainDiv}>
            <View style={styles.Header} >
            <IconButton
                iconSource={BackIcon} 
                iconStyle={styles.BackIcon}
                onPress={()=>navigation.goBack()}
                />
                <IconButton
                iconSource={UserIcon} 
                iconStyle={styles.UserIcon} 
                />
            </View>
            <View style={styles.Div1}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'700'}}>Dr Clara Odding</Text>
                    <Text style={{marginLeft:10}}>Confirmation</Text>
                </View>

            </View>
            <View style={styles.Div2}>
                <ScrollView horizontal={true} style={{flex:0.3}}>
                    <Image source={Card1} 
                    // style={{aspectRatio:16/9}} 
                    />
                    <Image source={Card2} 
                    // style={{aspectRatio:16/9}} 
                    />
                </ScrollView>
                <OpacityButton 
                    buttonstyle={{
                        height:43,
                        backgroundColor:'#2A2AC0',
                        borderRadius:10,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    textstyle={{color:'#fff',fontWeight:'700'}}
                    children="Pay now"
                    />
                </View>
        </View>
    );
}
export default AppointmentConfirmation;