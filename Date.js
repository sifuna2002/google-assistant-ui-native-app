import * as React from "react";
import { View, Text, StyleSheet,useColorScheme } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function Date() {
    const theme=useColorScheme();
    return ( 
        <View style={styles.Container}>
            <View style={styles.Left}>
                <View style={styles.Blue}></View>
                <Text style={theme ==='dark' ? {color:'white'} : {color:'black'}}>TODAY .</Text>
                <Text style={theme ==='dark' ? {color:'white'}: {color:'black'}}> February 18</Text>
            </View>
            <View style={styles.Right}>
                {theme==='dark' ? <Ionicons name="settings" size={20} color="white"  /> : <Ionicons name="settings" size={20} color="grey"  />}
            </View>
        </View>
    )
}

export default Date

const styles=StyleSheet.create({

Container :{
    marginLeft :20,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:20,
    borderRadius:5,
    backgroundColor:'transparent',
},


Blue :{
    width: 5,
    backgroundColor:'skyblue',
    borderRadius:10,
    marginRight: 10,
    height: 20,
},
Left :{
    flexDirection:'row',	
	flexWrap:'wrap',
	justifyContent:'center',
},
Right :{
    position:'absolute',
		alignItems:'center',
		flexWrap:'wrap',
		justifyContent:'center',
		right:20,
},
});

