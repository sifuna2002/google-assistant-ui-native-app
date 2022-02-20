import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function Date() {
    return ( 
        <View style={styles.Container}>
            <Ionicons style={styles.w} name="partly-sunny" color="whitesmoke" size={40} />
            <View style={styles.Left}>
                <Text style={styles.t}>28 . Mostly Cloud</Text>
                <Text style={styles.em}>Nairobi Kenya</Text>
            </View>
            <View style={styles.Right}>
            <Ionicons name="chevron-down" color="black" size={20} />
            </View>
        </View>
    )
}

export default Date

const styles=StyleSheet.create({

Container :{
    marginLeft :20,
    marginTop :20,
    marginRight :20,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:'#6495ED',
    minHeight:90,
},


t :{
    fontSize:20,
},
Left :{
    flexDirection:'column',	
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
w :{
    position:'absolute',
		alignItems:'center',
		flexWrap:'wrap',
		justifyContent:'center',
		left:20,
},
});

