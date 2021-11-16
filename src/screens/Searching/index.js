import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
import {IconButton, OpacityButton,StarRating} from '../../components';
import Drawer from '../../../assets/drawer.png';
import User from '../../../assets/user.png';
import pic1 from '../../../assets/pic1.png';
import pic2 from '../../../assets/pic2.png';
import pic3 from '../../../assets/pic3.png';
import pic4 from '../../../assets/pic4.png';
import Vdots from '../../../assets/Vdots.png';
import FilterIcon from '../../../assets/Group30.png';
import SearchIcon from '../../../assets/blueSearch.png';
import LocationIcon from '../../../assets/Group23.png';
import CalendarIcon from '../../../assets/Group26.png';

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
    InputDiv:{
        width:"100%",
        height:45,
        marginTop:15,
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
    },
    Input:{
        width:'90%',
        height:45,
        marginLeft:5,
    },
    SearchButton:{
        backgroundColor:'#2A2AC0',
        width:'100%',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        borderRadius:10,
    },
    HRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:15,
    },
    Row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
        paddingVertical:10
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
    Text1:{fontSize:14,fontWeight:'700'},
    Text2:{fontSize:10,color:'grey'},
    LeftDiv:{flexDirection:'row'},
    TextDiv:{marginLeft:10,},
    StarDiv:{flexDirection:'row',alignItems:'flex-end'},
    StarText:{fontSize:10,color:'grey',marginLeft:5},
    IconButton:{padding:5,},
})

function SearchBar({placeholder,SearchBarIcon}){
    return(
        <View style={styles.InputDiv}>
            <IconButton
            iconSource={SearchBarIcon} 
            />
            <TextInput 
            style={styles.Input} 
            placeholder={placeholder} />
        </View>
    )
}
function SearchAppointment({navigation}){
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
                <Text style={styles.Heading}>Book an Appointment</Text>
            </View>
            <ScrollView style={{flex:0.8}}>
                <View style={styles.ContentDiv}>
                    <SearchBar 
                    placeholder="Doctor,Specialities,..."
                    SearchBarIcon={SearchIcon}
                    />
                    <SearchBar 
                    placeholder="Select Area"
                    SearchBarIcon={LocationIcon}
                    />
                    <SearchBar 
                    placeholder="Select Date"
                    SearchBarIcon={CalendarIcon}
                    />
                    <OpacityButton 
                    children="Search"
                    textstyle={{color:'#fff'}}
                    buttonstyle={styles.SearchButton} 
                    />
                    <View style={styles.HRow}>
                        <Text>All Specialities</Text>
                        <IconButton iconSource={FilterIcon} />
                    </View>
                        <View style={styles.Row}>
                            <View style={styles.LeftDiv}>
                                <Image source={pic1} />
                                <View style={styles.TextDiv}>
                                    <Text style={styles.Text1}>Dr Martin Piller</Text>
                                    <Text style={styles.Text2}>Dr Martin Piller</Text>
                                    <Text style={styles.Text2}>Dr Martin Piller</Text>
                                    <View style={styles.StarDiv}>
                                        <StarRating />
                                        <Text style={styles.StarText}>(213)</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <IconButton iconSource={Vdots} buttonStyle={styles.IconButton} />
                            </View>
                        </View>
                        <View style={styles.Row}>
                            <View style={styles.LeftDiv}>
                                <Image source={pic2} />
                                <View style={styles.TextDiv}>
                                    <Text style={styles.Text1}>Dr Martin Piller</Text>
                                    <Text style={styles.Text2}>Dr Martin Piller</Text>
                                    <Text style={styles.Text2}>Dr Martin Piller</Text>
                                    <View style={styles.StarDiv}>
                                        <StarRating />
                                        <Text style={styles.StarText}>(213)</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <IconButton iconSource={Vdots} buttonStyle={styles.IconButton} />
                            </View>
                        </View>
                        <View style={styles.Row}>
                            <View style={styles.LeftDiv}>
                                <Image source={pic3} />
                                <View style={styles.TextDiv}>
                                    <Text style={styles.Text1}>Dr Martin Piller</Text>
                                    <Text style={styles.Text2}>Dr Martin Piller</Text>
                                    <Text style={styles.Text2}>Dr Martin Piller</Text>
                                    <View style={styles.StarDiv}>
                                        <StarRating />
                                        <Text style={styles.StarText}>(213)</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <IconButton iconSource={Vdots} buttonStyle={styles.IconButton} />
                            </View>
                        </View>
                        <View style={styles.Row}>
                            <View style={styles.LeftDiv}>
                                <Image source={pic4} />
                                <View style={styles.TextDiv}>
                                    <Text style={styles.Text1}>Dr Martin Piller</Text>
                                    <Text style={styles.Text2}>Dr Martin Piller</Text>
                                    <Text style={styles.Text2}>Dr Martin Piller</Text>
                                    <View style={styles.StarDiv}>
                                        <StarRating />
                                        <Text style={styles.StarText}>(213)</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <IconButton iconSource={Vdots} buttonStyle={styles.IconButton} />
                            </View>
                        </View>
                </View>
            </ScrollView>
        </View>
    );
}
export default SearchAppointment;