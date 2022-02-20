import * as React from "react";
import { View, Text, StyleSheet,useColorScheme } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function Date() {
    const theme=useColorScheme();
    return ( 
        <View style={styles.Container}>
            <Ionicons style={styles.w} name="partly-sunny" color="whitesmoke" size={40} />
            <View style={styles.Left}>
                <Text style={theme ==='dark' ? styles.t_dark:styles.t_light}>28 . Mostly Cloud</Text>
                <Text style={theme ==='dark' ? {color:'white'} : {color:'black'}}>Nairobi Kenya</Text>
            </View>
            <View style={styles.Right}>
            {theme==='dark'?<Ionicons name="chevron-down" color="white" size={20} />:<Ionicons name="chevron-down" color="black" size={20} />}
            
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


t_light :{
    fontSize:20,
    color:'black',
},
t_dark :{
    fontSize:20,
    color: '#FFFFFF',
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

