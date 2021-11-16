import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../../../assets/abc.png";
export default function Splash({navigation}) {
     setTimeout(()=>{
        navigation.navigate('Intro1');
     },3000)   
  return (
    <View
      style={styles.container}
      >
        <LinearGradient
            colors={['rgba(42,42,192,0.8)','transparent']}
            style={styles.background}
        />
        <Image source={Logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#181461',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 700,
    },
    logo:{
       width:120,
       height:120, 
    }
  });  