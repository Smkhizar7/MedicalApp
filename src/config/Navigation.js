import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Splash,
  Intro1,
  Intro2,
  Intro3,
  Welcome,
  SignIn,
  Verification,
  Location,
  Map
} from '../screens';
import MyDrawer from './Drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            {/* <Stack.Screen name="Splash" component={Splash} options={{headerShown:false,statusBarHidden:true}} />
            <Stack.Screen name="Intro1" component={Intro1} options={{headerShown:false,statusBarHidden:true}} />
            <Stack.Screen name="Intro2" component={Intro2} options={{headerShown:false,statusBarHidden:true}} />
            <Stack.Screen name="Intro3" component={Intro3} options={{headerShown:false,statusBarHidden:true}} />
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false,statusBarHidden:true}} />
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false,statusBarHidden:true}} />
            <Stack.Screen name="Verification" component={Verification} options={{headerShown:false,statusBarHidden:true}} />
            <Stack.Screen name="Location" component={Location} options={{headerShown:false,statusBarHidden:true}} />
            <Stack.Screen name="Map" component={Map} options={{headerShown:false,statusBarHidden:true}} /> */}
            <Stack.Screen name="MyDrawer" component={MyDrawer} options={{headerShown:false,statusBarHidden:true}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;