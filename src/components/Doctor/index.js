import React from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';
import Lang1 from '../../../assets/lang1.png';
import Lang2 from '../../../assets/lang2.png';
import Lang3 from '../../../assets/lang3.png';
import Circle from '../../../assets/circle.png';

const Data = [
    {
        key:1,
        Heading:"Education"
    },
    {
        key:2,
        Heading:"Publication"
    },
    {
        key:3,
        Heading:"Description"
    }
];

const styles = StyleSheet.create({
    MainDiv:{
        flex:1,
        backgroundColor:'#ECF1FA',
    },
    LanguageView:{
        paddingVertical:15,
        borderBottomWidth:1,
        borderBottomColor:'grey',
    },
    LanguageText:{
        fontSize:16,
        fontWeight:'700',
    },
    LanguagesView:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginTop:10
    },
    LangSubView:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginRight:20,
    },
    LangIcon:{width:20,height:10},
    View1:{
        paddingVertical:15,
        borderBottomWidth:1,
        borderBottomColor:'grey',
    },
    Text1:{
        fontSize:16,
        fontWeight:'700',
    },
    SubView:{
        justifyContent:'flex-start',
        marginTop:10
    },
    TextView:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        },
});

function Doctor(){
    return(
        <ScrollView>
            <View style={styles.MainDiv}>
                <View style={styles.LanguageView}>
                    <Text style={styles.LanguageText}>Languages</Text>
                    <View style={styles.LanguagesView}>
                        <View style={styles.LangSubView}>
                            <Image source={Lang1} style={styles.LangIcon} />
                            <Text style={{marginLeft:10}}>English</Text>
                        </View>
                        <View style={styles.LangSubView}>
                            <Image source={Lang2} style={styles.LangIcon} />
                            <Text style={{marginLeft:10}}>French</Text>
                        </View>
                        <View style={styles.LangSubView}>
                            <Image source={Lang3} style={styles.LangIcon} />
                            <Text style={{marginLeft:10}}>German</Text>
                        </View>
                    </View>
                </View>
                <FlatList
                data={Data}
                renderItem={({item})=>
                    <View key={item.key} style={styles.View1}>
                        <Text style={styles.Text1}>{item.Heading}</Text>
                        <View style={styles.SubView}>
                            <View style={styles.TextView}>
                                <Image source={Circle} style={{width:10,height:10}} />
                                <Text style={{marginLeft:10}}>UCL - Cliniques -Luc (1987 - 1999) - Doctor</Text>
                            </View>
                            <View style={styles.TextView}>
                                <Image source={Circle} style={{width:10,height:10}} />
                                <Text style={{marginLeft:10}}>UCL - Cliniques -Luc (1987 - 1999) - Doctor</Text>
                            </View>
                            <View style={styles.TextView}>
                                <Image source={Circle} style={{width:10,height:10}} />
                                <Text style={{marginLeft:10}}>UCL - Cliniques -Luc (1987 - 1999) - Doctor</Text>
                            </View>
                        </View>
                    </View>
                    }
                    />
                </View>
        </ScrollView>
    );
}
export default Doctor;