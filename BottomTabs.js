import * as React from "react";
import { View, Text, StyleSheet,useColorScheme } from "react-native";
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
function BottomTabs() {
    const theme=useColorScheme();
    return ( 
        <View style={styles.Container}>
            <View style={styles.Left}>
            <MaterialIcons name="keyboard-voice" size={35} color="blue"  /> 
            </View>
            <View style={styles.Right}>
            <MaterialIcons name="keyboard-hide" size={40} color="white"  /> 
            </View>
        </View>
    )
}

export default BottomTabs

const styles=StyleSheet.create({

Container :{
    marginLeft :20,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:20,
    borderRadius:5,
    backgroundColor:'transparent',
    position: 'relative',
    marginTop:115,
},

Left :{
	justifyContent:'center',
    position: 'absolute',
    left:140,
    
},
Right :{
    position:'absolute',
	alignItems:'center',
	flexWrap:'wrap',
	justifyContent:'center',
	right:10,
},
});

