import React from 'react'
import { useColorScheme,Image,View,Text,StyleSheet,TouchableOpacity} from 'react-native'
const Task=(props) =>{
	const theme=useColorScheme();
	return (
		<View style={styles.item}>
			<View style={styles.iteml}>
				<Text>Welcome to Snapshot</Text>
				<Text style={styles.sq}>Get a Snapshot of What's ahead for you</Text>
				<Text style={styles.t}>{props.text}</Text>
				<TouchableOpacity><Text style={{color:'#55bcf6',fontSize:20}}>Got it</Text></TouchableOpacity>
			</View>
			<View style={styles.right}>
			<Image
  				source={require('./g.png')}
  				style={{ width: 130, height: 130 }}
			/>
    			</View>
		</View>
	)
}
const styles=StyleSheet.create({
	item:{
		backgroundColor:'#fff',
		padding:15,
		borderRadius:10,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
		marginBottom:20,
	},
	iteml:{
		flexDirection:'column',
		
		flexWrap:'wrap',
		justifyContent:'center',
	},
	sq:{
		marginTop:15,
		fontSize:24,
		maxWidth:'80%',
		
	},
	t:{
		maxWidth:'80%',
	},
	right:{
		position:'absolute',
		alignItems:'center',
		flexWrap:'wrap',
		justifyContent:'center',
		right:0,
		borderRadius:100,
	},
	
})
export default Task
