import * as React from "react";
import { View, Text,TouchableOpacity,StyleSheet,useColorScheme } from "react-native";
import Task from './Task'
import Date from "./Date"

import BottomTabs from "./BottomTabs";
 import { LinearGradient } from "expo-linear-gradient";
 import {Ionicons} from '@expo/vector-icons';
 import Weather from './Weather'
export default function App() {
const theme=useColorScheme();

  return (
    <View style={theme === 'dark' ? styles.container_dark : styles.container_light}>
    	<View style={styles.taskw}>
    	    <View style={styles.header}>
    		<Text style={theme === 'dark' ? styles.text_dark : styles.text_light}>Have a great afternoon😌</Text>
    	    
    	     <View style={styles.right}>
			 <Ionicons name="bulb" color="grey" size={32} />
    		<View style={styles.circle}>
  			<Text style={styles.name}>SD</Text>
    	        </View>
    	     </View>
    	     </View>
    		<View style={styles.tasks}>
    			<Task text='See all the important things you need to get done in one place, add more, and see suggested next actions to accomplish them' />
    			
    		</View>

    	</View>
    	<Date />
    	<Weather />
    	<TouchableOpacity style={styles.float}>
    		<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['orange', 'blue',]} style={styles.horizontal}></LinearGradient>
    		<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}}  colors={['red', 'green',]} style={styles.vertical}></LinearGradient>
    	</TouchableOpacity>
		<BottomTabs />
    </View>
  );
}

const styles=StyleSheet.create({
	container_light: {
		flex:1,
		backgroundColor:'#e8eaed',
		
	},
	container_dark: {
		flex:1,
		backgroundColor:'#3a3434',
		
	},
	taskw: {
		
		paddingTop:80,
		paddingHorizontal:20,
			
	},
	text_dark:{
		fontSize:24,
		maxWidth:'60%',
		color: '#ffffff',
	},
	text_light:{
		fontSize:24,
		maxWidth:'60%',
		color:'black',
	},
	name:{
		fontSize:20,
		color:'white',
	},
	tasks:{
		marginTop:30,
	},
	float:{
		borderWidth:1,
		borderColor:'#fff',
		alignItems:'center',
		justifyContent:'center',
		width:60,
		position:'absolute',
		bottom:40,
		right:10,
		height:60,
		backgroundColor:'#fff',
		borderRadius:100,
	},
	horizontal:{
		position:'absolute',
		
		width:'50%',
		height:'12.5%',
		left:'25%',
		top:'43.75%',
	},
	vertical:{
		position:'absolute',
		
		width:'12.5%',
		height:'50%',
		left:'43.75%',
		top:'25.5%',
	},
	header:{
		
		padding:15,
		borderRadius:10,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
		marginBottom:20,
	},
	
	right:{
		flexDirection:'row',
		alignItems:'center',
		flexWrap:'wrap',
		
	},
	circle:{
		width:40,
		height:40,
		backgroundColor:'#55bcf6',
		borderRadius:40,
		alignItems:'center',
		justifyContent:'center',
		marginLeft:10,
	},
	bulb:{
		padding:15,
	},
});
