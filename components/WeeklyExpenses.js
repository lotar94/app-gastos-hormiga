import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class WeeklyExpenses extends Component {
	render() {
		const { navigation } = this.props
		return (
			<View style={styles.container}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen')}}>
					<View style={styles.boxSmall} onPress={()=> {navigation.navigate('ListDiarySpendScreen')}}>
						<Text style={styles.text}>Luness</Text>
						<Text style={styles.text}>$ 17.580</Text>
					</View>
					</TouchableOpacity>      
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen')}}>
					<View style={styles.boxSmall}>
						<Text style={styles.text}>Martes</Text>
						<Text style={styles.text}>$ 8.300</Text>
					</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen')}}>
					<View style={styles.boxSmall}>
						<Text style={styles.text}>Miercoles</Text>
						<Text style={styles.text}>$ 12.620</Text>
					</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen')}}>
					<View style={styles.boxSmall}>
						<Text style={styles.text}>Jueves</Text>
						<Text style={styles.text}>$ 7.720</Text>
					</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen')}}>
					<View style={styles.boxSmall}>
						<Text style={styles.text}>Viernes</Text>
						<Text style={styles.text}>$ 2.140</Text>
					</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen')}}>
					<View style={styles.boxSmall}>
						<Text style={styles.text}>Sabado</Text>
						<Text style={styles.text}>$ 8.820</Text>
					</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen')}}>
					<View style={styles.boxSmall}>
						<Text style={styles.text}>Domingo</Text>
						<Text style={styles.text}>$ 13.420</Text>
					</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		flex: 0,
	},
	boxSmall: {
		marginLeft: 10,
		justifyContent: 'center',
		alignItems: 'center',
		width: 150,
		height: 100,
		borderRadius: 20,
		marginBottom: 10,
		marginRight: 10,
		backgroundColor: '#486573',
	},
	text: {
		color: 'white',
		fontSize: 24,
		fontWeight: "bold",
		fontFamily: 'Inter_900Black'
	}
})
