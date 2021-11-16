import React,{ useState,useEffect} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { 
    Image,
    Text,
    StyleSheet,
    TextInput, 
    View, 
    Dimensions,
    TouchableOpacity
} from 'react-native';
import * as Location from 'expo-location';
import Icon from '../../../assets/Group56.png';
import { useFonts } from 'expo-font';

function Map({navigation}) {
    const [location, setLocation] = useState(null);
    const [loaded] = useFonts({
      Lobster: require('../../fonts/Lobster.ttf'),
      Praise: require('../../fonts/Praise.ttf'),
    });

    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        })();
    }, []);
    
    if (!loaded) {
        return null;
    }

  return (
    <View style={styles.container}>
        {
            location?(<>
                <View style={styles.LocationDiv}>
                            <Image source={Icon} style={styles.TextIcon} />
                            <TextInput 
                            textContentType="location" 
                            placeholder="Your Location"
                            style={styles.Location}
                            />
                            </View>
                <MapView style={styles.map} 
                region={{
                    latitude: location?.coords.latitude,
                    longitude: location?.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                >
                    <Marker 
                    image={Icon} 
                    coordinate={{
                        latitude: location?.coords.latitude,
                        longitude: location?.coords.longitude,
                    }} 
                    >
                    </Marker>
                </MapView>
                <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.Btn1}
                onPress={()=>navigation.navigate('MyDrawer')}
                >
                    <Text style={styles.BtnText1}>Confirm</Text>
                </TouchableOpacity>
                  </>
            ):(
                <Text style={styles.Loading}>Loading...</Text>
            )
        }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Loading:{
      fontSize:40,
      fontFamily:"Lobster",
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  LocationDiv:{
    zIndex:1,
    position:'absolute',
    top:40,
    flexDirection:'row',
    width:'90%',
    height:45,
    backgroundColor:"#fff",
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:15,
    },
    Location:{
        width:'90%',
        height:45,
        fontSize:16,
    },
    TextIcon:{
        width:16,
        height:32,
        marginRight:10,
    },
    Btn1:{
        position:'absolute',
        bottom:40,
        width:'90%',
        height:43,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2A2AC0'
    },
    BtnText1:{
        color:'#fff',
        fontSize:25,
        fontFamily:'Praise',
    },
});
export default Map;