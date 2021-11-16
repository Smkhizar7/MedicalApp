import React from "react";
import {StyleSheet,View,Text, TouchableOpacity, Image,FlatList} from 'react-native';
import { IconButton,OpacityButton } from "..";
import ILogo from '../../../assets/ilogo.png';
import Pencile from '../../../assets/pencile.png';

const Data = [
    {
        key:1,
        date:"09/04/2020",
        text:"Dentist - Clara Odding"
    },
    {
        key:2,
        date:"21/04/2020",
        text:"Dentist - Steven Pauliner"
    },
    {
        key:3,
        date:"18/06/2020",
        text:"Deematologist - Noemi Shinte"
    },
]

const styles = StyleSheet.create({
    MainDiv:{
        flex:1,
        backgroundColor:'#ECF1FA'
    },
    ItemDiv:{
        borderBottomWidth:1,
        borderBottomColor:'lightgrey',
        paddingVertical:20,
    },
    DateText:{
        color:'darkgrey'
    },
    SubDiv:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    TextDiv:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    MainText:{
        alignItems:'center',
        marginRight:5,
        fontWeight:'700'
    },
    Icon:{
        width:13,
        height:13
    },
    Button:{
        justifyContent:'center',
        alignItems:'center'
    },
    Modify:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    ModifyIcon:{
        width:13,
        height:13
    },
    ModifyText:{
        color:'#2A2AC0',
        marginLeft:5
    },
    BookButton:{
        width:'95%',
        height:43,
        backgroundColor:'#2A2AC0',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    
    },
    BookButtonText:{
        color:'#fff'
    },
    BookButtonDiv:{
        marginTop:30,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
})

function Upcoming({navigation}){
    return (
        <View
        style={styles.MainDiv}
        >
            <FlatList 
            data={Data}
            renderItem={
                ({item})=>
                <View key={item.key} style={styles.ItemDiv}>
                    <Text style={styles.DateText}>{item.date}</Text>
                    <View style={styles.SubDiv}>
                        <View style={styles.TextDiv}>
                            <Text style={styles.MainText}>
                                {item.text}
                            </Text>
                            <IconButton 
                            iconSource={ILogo} 
                            iconStyle={styles.Icon} 
                            buttonStyle={styles.Button} 
                            />
                        </View>
                        <TouchableOpacity 
                        style={styles.Modify}>
                            <Image source={Pencile} style={styles.ModifyIcon} />
                            <Text style={styles.ModifyText}>Modify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        }
        ListFooterComponent={()=>
        <OpacityButton 
        children="Book a new appointment"
        buttonstyle={styles.BookButton} 
        textstyle={styles.BookButtonText}
        />}
        ListFooterComponentStyle={styles.BookButtonDiv}
        />
        </View>
    )
}
export default Upcoming;