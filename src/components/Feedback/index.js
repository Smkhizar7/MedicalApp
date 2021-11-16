import React from "react";
import { Text, View,StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MainDiv:{
        flex:1,
        backgroundColor:'#ECF1FA'
    },
});


function Feedback(){
    return(
        <View style={styles.MainDiv}>
            <Text>Feedback</Text>
        </View>
    )
}
export default Feedback;