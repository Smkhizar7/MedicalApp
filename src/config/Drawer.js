import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
  Dashboard,
  Appointments,
  BookingAppointments,
  SearchAppointment,
  AppointmentConfirmation
} from '../screens';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { Image, Text, View } from 'react-native';
import ProfilePic from '../../assets/ProfileImage.png';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        // <DrawerContentScrollView {...props} style={{flex:1,margin:0,padding:0,width:'100%'}}>
          <>
          <DrawerItem
          style={{
              flex:0.3,
              margin:0,
              padding:0,
            backgroundColor:'#ECF1FA',
        }}
          label={()=>
              <View 
                style={{
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'center',
                }}>
                  <Image source={ProfilePic} style={{position:'relative',top:20}} />
                  <View style={{marginLeft:10,position:'relative',top:20}}>
                    <Text style={{color:'#2A2AC0',fontWeight:'700'}}>Sophie Garnier</Text>
                    <Text style={{color:'#181461'}}>Luxembourg</Text>
                  </View>
              </View>
          }
          />
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        />
     {/* </DrawerContentScrollView> */}
     </>
    );
  }

function MyDrawer() {
  return (
    <Drawer.Navigator 
    screenOptions={{drawerActiveBackgroundColor:'dodgerblue',drawerActiveTintColor:'white',}}
    drawerContent={(props)=><CustomDrawerContent {...props} />}
    >
      {/* <Drawer.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
      <Drawer.Screen name="Appointments" component={Appointments} options={{headerShown:false}} />
      <Drawer.Screen name="SearchingAppointment" component={SearchAppointment} options={{headerShown:false}} /> */}
      {/* <Drawer.Screen name="BookingAppointment" component={BookingAppointments} options={{headerShown:false}} /> */}
      <Drawer.Screen name="AppointmentConfirmation" component={AppointmentConfirmation} options={{headerShown:false}} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;