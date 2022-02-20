import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function Date() {
    return ( 
        <View style={styles.Container}>
            <View style={styles.Left}>
                <View style={styles.Blue}></View>
                <Text style={styles.em}>TODAY .</Text>
                <Text style={styles.p}> February 18</Text>
            </View>
            <View style={styles.Right}>
            <Ionicons name="settings" color="grey" size={20} />
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

