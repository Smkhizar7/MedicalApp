import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList
} from 'react-native';
import {IconButton, SearchBar} from '../../components';
import Drawer from '../../../assets/drawer.png';
import User from '../../../assets/user.png';
import pic1 from '../../../assets/Group18.png';
import pic2 from '../../../assets/intro2.png';
import pic3 from '../../../assets/intro3.png';
import pic4 from '../../../assets/Group7.png';

const styles = StyleSheet.create({
    MainDiv:{
        flex:1,
    },
    Header:{
        flex:0.2,
        justifyContent:'center',
        backgroundColor:'#fff',
        paddingHorizontal:15,
    },
    IconDiv:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15,
    },
    DrawerIcon:{
        width:20,
        height:15,
    },
    UserIcon:{
        width:25,
        height:25,
    },
    Heading:{
        fontSize:24,
        fontWeight:'700',
    },
    ContentDiv:{
        flex:0.8,
        padding:15,
        backgroundColor:'#ECF1FA',
    },
    Row:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    OpacityDiv:{
        width:'46%',
        height:'90%',
        marginTop:20,
        backgroundColor:'#fff',
        padding:10,
        borderRadius:15,
    },
    DivText:{
        fontWeight:'700',
        marginBottom:20,
    },
})

function Dashboard({navigation}){
    return (
        <View style={styles.MainDiv}>
            <View style={styles.Header}>
                <View style={styles.IconDiv}>
                    <IconButton
                    iconSource={Drawer}
                    iconStyle={styles.DrawerIcon}
                    onPress={()=>navigation.openDrawer()}
                    />
                    <IconButton
                    iconSource={User}
                    iconStyle={styles.UserIcon}
                    />
                </View>
                <Text style={styles.Heading}>Dashboard</Text>
            </View>
            <View style={styles.ContentDiv}>
                <SearchBar />
                <View style={styles.Row}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styles.OpacityDiv}>
                        <Text style={styles.DivText}>Appointments</Text>
                        <Image source={pic1} style={{width:128,height:114,}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.OpacityDiv}>
                        <Text style={styles.DivText}>Records</Text>
                        <Image source={pic2} style={{width:118,height:109}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.Row}>
                    <TouchableOpacity style={styles.OpacityDiv}>
                        <Text style={styles.DivText}>Forum</Text>
                        <Image source={pic3} style={{width:120,height:134}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.OpacityDiv}>
                        <Text style={styles.DivText}>Account Settings</Text>
                        <Image source={pic4} style={{width:88,height:130}} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
export default Dashboard;