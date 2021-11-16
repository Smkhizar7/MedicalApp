import React from 'react';
import Logo from '../../../assets/Logo.png';
import Pic1 from '../../../assets/Group131.png';
import Dot from '../../../assets/dots3.png';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { OpacityButton } from '../../components';

const styles = StyleSheet.create({
  MainDiv:{
    flex:1,
    backgroundColor:'#ECF1FA',
    paddingVertical:20,
  },
  LogoDiv:{
    flex:0.3,
    paddingTop:40,
    justifyContent:'center',
    alignItems:'center',
  },
  Logo:{
    width:120,
    height:85,
  },
  Heading:{
    width:'50%',
    textAlign:'center',
    color:'#181461',
    marginVertical:30,
    fontSize:20,
    fontWeight:'700',
  },
  ImageDiv:{
    flex:0.6,
    justifyContent:'center',
    alignItems:'center',
  },
  Button:{

  },
  Pic:{
    width:375,
    height:375,
  },
  Text:{
    color:'#2A2AC0'
  },
  BottomDiv:{
    flex:0.1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
  },
  Dots:{
    width:42,
  }
})
function Intro3({navigation}){
  return (
    <SafeAreaView style={styles.MainDiv}>
      <View style={styles.LogoDiv}>
        <Image source={Logo} style={styles.Logo} />
        <Text style={styles.Heading}>Discuss in the Forum</Text>
      </View>
      <View style={styles.ImageDiv}>
        <Image source={Pic1} style={styles.Pic} />
      </View>
      <View style={styles.BottomDiv}>
        <OpacityButton 
        buttonstyle={styles.Button} 
        textstyle={styles.Text}
        onPress={()=>navigation.navigate('Welcome')}
        >
          Skip
        </OpacityButton>
        <Image source={Dot} style={styles.Dots} />
        <OpacityButton 
        buttonstyle={styles.Button} 
        textstyle={styles.Text}
        onPress={()=>navigation.navigate('Welcome')}
        >
          Next
        </OpacityButton>
      </View>
    </SafeAreaView>
  )
}
export default Intro3;