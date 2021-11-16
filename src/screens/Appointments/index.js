import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BackIcon from '../../../assets/Path240.png';
import UserIcon from '../../../assets/user.png';
import { IconButton, Past,Upcoming,SearchBar } from '../../components';
import { useFonts } from 'expo-font';

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
      <Tab.Screen 
      name="Upcoming" 

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
          borderStartWidth:60
      },
      tabBarLabel:"Upcoming",
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
      component={Upcoming} />
      <Tab.Screen 
      name="Past" 
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
            borderEndWidth:60
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
      component={Past} />
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
        flex:0.2,
        margin:10,
        justifyContent:'flex-start',
    },
    Div2:{
        flex:0.8,
    },
    Header:{
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
    }
})
function Appointments({navigation}){
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
                <Text 
                style={styles.Heading}>My Appointments</Text>
                <SearchBar />
                {/* <View style={styles.InputDiv}>
                    <TextInput 
                    style={styles.Input} 
                    placeholder="Search"/>
                    <IconButton
                    iconSource={SearchBarIcon} 
                    iconStyle={styles.InputIcon} 
                    />
                </View> */}
            </View>
            <View style={styles.Div2}>
                <MyTabs />
            </View>
        </View>
    );
}
export default Appointments;