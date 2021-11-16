import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,Image, ScrollView
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BackIcon from '../../../assets/Path240.png';
import UserIcon from '../../../assets/user.png';
import { IconButton, Past,Upcoming,SearchBar,StarRating, OpacityButton, Doctor, Clinic, Feedback } from '../../components';
import { useFonts } from 'expo-font';
import Vdots from '../../../assets/Vdots.png';
import pic2 from '../../../assets/pic2.png';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const [loaded] = useFonts({
        Lobster: require('../../fonts/Lobster.ttf'),
        Praise: require('../../fonts/Praise.ttf'),
      });
      if (!loaded) {
        return null;
    }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Doctor" 
      options={{
        tabBarContentContainerStyle:{
            justifyContent:'space-between'
        },
      tabBarActiveTintColor:'blue',
      tabBarItemStyle:{
          alignItems:'stretch',
          justifyContent:'space-between',
      },
      tabBarIndicatorStyle:{
        backgroundColor:'#ECF1FA',
        borderColor:'blue',
        borderBottomWidth:2,
      },
      tabBarLabel:"Doctor",
      tabBarLabelStyle:{
          textAlign:'left',
          textTransform:'capitalize',
          fontSize:16,
          fontFamily:'Lobster'
      },
      tabBarInactiveTintColor:'grey',
      tabBarStyle:{
          backgroundColor:'#ECF1FA'
      },
        }}
      component={Doctor} 
      />
      <Tab.Screen name="Clinic" 
      options={{
          tabBarContentContainerStyle:{
              justifyContent:'space-between'
          },
        tabBarActiveTintColor:'blue',
        tabBarItemStyle:{
            alignItems:'stretch',
            justifyContent:'space-between',
        },
        tabBarIndicatorStyle:{
            backgroundColor:'#ECF1FA',
            borderColor:'blue',
            borderBottomWidth:2,
        },
        tabBarLabel:"Clinic",
        tabBarLabelStyle:{
            textAlign:'center',
            textTransform:'capitalize',
            fontSize:16,
            fontFamily:'Lobster'
        },
        tabBarInactiveTintColor:'grey',
        tabBarStyle:{
            backgroundColor:'#ECF1FA'
        },
          }}
      component={Clinic} 
      />
      <Tab.Screen name="Feedback" 
      options={{
          tabBarContentContainerStyle:{
              justifyContent:'space-between'
          },
        tabBarActiveTintColor:'blue',
        tabBarItemStyle:{
            alignItems:'stretch',
            justifyContent:'space-between',
        },
        tabBarIndicatorStyle:{
            backgroundColor:'#ECF1FA',
            borderColor:'blue',
            // borderEndWidth:60,
            borderBottomWidth:2,
        },
        tabBarLabel:"Past",
        tabBarLabelStyle:{
            textAlign:'right',
            textTransform:'capitalize',
            fontSize:16,
            fontFamily:'Lobster'
        },
        tabBarInactiveTintColor:'grey',
        tabBarStyle:{
            backgroundColor:'#ECF1FA'
        },
          }}
      component={Feedback} 
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
    MainDiv:{
        flex:1,
        padding:10,
        backgroundColor:'#ECF1FA'
    },
    Div1:{
        flex:0.6,
        margin:10,
        justifyContent:'flex-start',
    },
    Div2:{
        flex:0.4,
    },
    Header:{
        flex:0.2,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    BackIcon:{
        width:15,
        height:20
    },
    UserIcon:{
        width:25,
        height:25
    },
    Heading:{
        marginVertical:10,
        fontSize:18,
        fontWeight:'700'
    },
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
    },
    Row:{
        flex:0.4,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingVertical:20,
        marginBottom:20
    },
    TimingScrollView:{flex:0.4,marginTop:10},
    TimingView:{
        width:250,
        backgroundColor:'#fff',
        padding:10,
        margin:10,
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    SeeAllButton:{
        backgroundColor:'#2A2AC0',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
    },
    SeeAllButtonText:{
        color:'#fff',
    },
    TimingTextView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    TimingHeading:{fontSize:18,fontWeight:'700'},
    TimingSlot:{fontSize:12,color:'grey',marginVertical:5},
    SlotsView:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
    },
    SlotView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    Timing:{
        borderWidth:0,
        borderColor:'grey',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    Stars:{
        width:15,
        height:15,
        resizeMode:'cover',
    },
    Text1:{fontSize:16,fontWeight:'700'},
    Text2:{fontSize:12,color:'grey',marginVertical:5},
    Text3:{fontSize:12,color:'grey'},
    TextDiv:{marginLeft:10,width:'50%'},
    StarDiv:{flexDirection:'row',alignItems:'flex-end'},
    StarText:{fontSize:10,color:'grey',marginLeft:5},
    IconButton:{padding:5,},
    BookButton:{
        backgroundColor:'#2A2AC0',
        height:43,
        borderRadius:10,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
    },
    BookButtonText:{color:'#fff'},
})
function BookingAppointments({navigation}){
    return (
        <View style={styles.MainDiv}>
            <View style={styles.Div1}>
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
                <View style={styles.Row}>
                    <Image source={pic2} style={{
                        width:'30%',
                        aspectRatio:9/10,
                        resizeMode:'stretch'}}/>
                    <View style={styles.TextDiv}>
                        <Text style={styles.Text1}>Dr Clara Odding</Text>
                        <Text style={styles.Text2}>Dentist</Text>
                        <Text style={styles.Text3}>2 Rue de Ermesinde</Text>
                        <Text style={styles.Text3}>Frisange - Luxembourg 3</Text>
                        <View style={styles.StarDiv}>
                            <StarRating style={styles.Stars} />
                            <Text style={styles.StarText}>(25)</Text>
                        </View>
                    </View>
                </View>
                <ScrollView horizontal={true} style={styles.TimingScrollView}>
                    <View style={styles.TimingView}>
                        <View style={styles.TimingTextView}>
                            <View>
                                <Text style={styles.TimingHeading}>Thu, 09 Apr</Text>
                                <Text style={styles.TimingSlot}>3 Slots available</Text>
                            </View>
                            <OpacityButton 
                            buttonstyle={styles.SeeAllButton}
                            textstyle={styles.SeeAllButtonText}
                            children="SEE ALL"
                            />
                        </View>
                        <View style={styles.SlotsView}>
                            <View style={styles.SlotView}>
                                <View style={styles.Timing}>
                                    <Text>08:00</Text>
                                </View>
                            </View>
                            <View style={styles.SlotView}>
                                <View style={styles.Timing}>
                                    <Text>12:00</Text>
                                </View>
                            </View>
                            <View style={styles.SlotView}>
                                <View style={styles.Timing}>
                                    <Text>15:00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.TimingView}>
                        <View style={styles.TimingTextView}>
                            <View>
                                <Text style={styles.TimingHeading}>Thu, 09 Apr</Text>
                                <Text style={styles.TimingSlot}>3 Slots available</Text>
                            </View>
                            <OpacityButton 
                            buttonstyle={styles.SeeAllButton}
                            textstyle={styles.SeeAllButtonText}
                            children="SEE ALL"
                            />
                        </View>
                        <View style={styles.SlotsView}>
                            <View style={styles.SlotView}>
                                <View style={styles.Timing}>
                                    <Text>08:00</Text>
                                </View>
                            </View>
                            <View style={styles.SlotView}>
                                <View style={styles.Timing}>
                                    <Text>12:00</Text>
                                </View>
                            </View>
                            <View style={styles.SlotView}>
                                <View style={styles.Timing}>
                                    <Text>15:00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.TimingView}>
                        <View style={styles.TimingTextView}>
                            <View>
                                <Text style={styles.TimingHeading}>Thu, 09 Apr</Text>
                                <Text style={styles.TimingSlot}>3 Slots available</Text>
                            </View>
                            <OpacityButton 
                            buttonstyle={styles.SeeAllButton}
                            textstyle={styles.SeeAllButtonText}
                            children="SEE ALL"
                            />
                        </View>
                        <View style={styles.SlotsView}>
                            <View style={styles.SlotView}>
                                <View style={styles.Timing}>
                                    <Text>08:00</Text>
                                </View>
                            </View>
                            <View style={styles.SlotView}>
                                <View style={styles.Timing}>
                                    <Text>12:00</Text>
                                </View>
                            </View>
                            <View style={styles.SlotView}>
                                <View style={styles.Timing}>
                                    <Text>15:00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <OpacityButton 
                    buttonstyle={styles.BookButton}
                    textstyle={styles.BookButtonText}
                    children="Book Appointment"
                    />
            </View>
            <View style={styles.Div2}>
                <MyTabs />
            </View>
        </View>
    );
}
export default BookingAppointments;