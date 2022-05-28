import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class WeeklyExpenses extends Component {

	render() {
		const datesOfWeek = {
			Monday: '',
			Tuesday: '',
			Wednesday: '',
			Thursday: '',
			Friday: '',
			Saturday: '',
			Sunday: ''
		}

		function sumarDias(fecha, dias){
			fecha.setDate(fecha.getDate() + dias);
			return fecha;
		}

		switch (new Date().toLocaleString('en-us', {weekday:'long'})) {
			case 'Monday':
				let d1 = new Date()
				let d2 = new Date()
				let d3 = new Date()
				let d4 = new Date()
				let d5 = new Date()
				let d6 = new Date()
				let d7 = new Date()
				datesOfWeek.Monday = d1.toLocaleDateString(),
				datesOfWeek.Tuesday = new Date(sumarDias(d2, +1)).toLocaleDateString(),
				datesOfWeek.Wednesday = new Date(sumarDias(d3, +2)).toLocaleDateString(),
				datesOfWeek.Thursday = new Date(sumarDias(d4, +3)).toLocaleDateString(),
				datesOfWeek.Friday = new Date(sumarDias(d5, +4)).toLocaleDateString(),
				datesOfWeek.Saturday = new Date(sumarDias(d6, +5)).toLocaleDateString(),
				datesOfWeek.Sunday = new Date(sumarDias(d7, +6)).toLocaleDateString()
				break;
			case 'Tuesday':
				let dd1 = new Date()
				let dd2 = new Date()
				let dd3 = new Date()
				let dd4 = new Date()
				let dd5 = new Date()
				let dd6 = new Date()
				let dd7 = new Date()
				datesOfWeek.Monday = new Date(sumarDias(dd1, -1)).toLocaleDateString(),
				datesOfWeek.Tuesday = dd2.toLocaleDateString(),
				datesOfWeek.Wednesday = new Date(sumarDias(dd3, +1)).toLocaleDateString(),
				datesOfWeek.Thursday = new Date(sumarDias(dd4, +2)).toLocaleDateString(),
				datesOfWeek.Friday = new Date(sumarDias(dd5, +3)).toLocaleDateString(),
				datesOfWeek.Saturday = new Date(sumarDias(dd6, +4)).toLocaleDateString(),
				datesOfWeek.Sunday = new Date(sumarDias(dd7, +5)).toLocaleDateString()
				break;
			case 'Wednesday':
				console.log('Wednesday');
				let ddd1 = new Date()
				let ddd2 = new Date()
				let ddd3 = new Date()
				let ddd4 = new Date()
				let ddd5 = new Date()
				let ddd6 = new Date()
				let ddd7 = new Date()
				datesOfWeek.Monday = new Date(sumarDias(ddd1, -1)).toLocaleDateString(),
				datesOfWeek.Tuesday = ddd2.toLocaleDateString(),
				datesOfWeek.Wednesday = new Date(sumarDias(ddd3, +1)).toLocaleDateString(),
				datesOfWeek.Thursday = new Date(sumarDias(ddd4, +2)).toLocaleDateString(),
				datesOfWeek.Friday = new Date(sumarDias(ddd5, +3)).toLocaleDateString(),
				datesOfWeek.Saturday = new Date(sumarDias(ddd6, +4)).toLocaleDateString(),
				datesOfWeek.Sunday = new Date(sumarDias(ddd7, +5)).toLocaleDateString()
				break;
			case 'Thursday':
				let dddd1 = new Date()
				let dddd2 = new Date()
				let dddd3 = new Date()
				let dddd4 = new Date()
				let dddd5 = new Date()
				let dddd6 = new Date()
				let dddd7 = new Date()
				datesOfWeek.Monday = new Date(sumarDias(dddd1, -3)).toLocaleDateString(),
				datesOfWeek.Tuesday = new Date(sumarDias(dddd2, -2)).toLocaleDateString(),
				datesOfWeek.Wednesday = new Date(sumarDias(dddd3, -1)).toLocaleDateString(),
				datesOfWeek.Thursday = dddd4.toLocaleDateString(),
				datesOfWeek.Friday = new Date(sumarDias(dddd5, +1)).toLocaleDateString(),
				datesOfWeek.Saturday = new Date(sumarDias(dddd6, +2)).toLocaleDateString(),
				datesOfWeek.Sunday = new Date(sumarDias(dddd7, +3)).toLocaleDateString()
				break;
			case 'Friday':
				let ddddd1 = new Date()
				let ddddd2 = new Date()
				let ddddd3 = new Date()
				let ddddd4 = new Date()
				let ddddd5 = new Date()
				let ddddd6 = new Date()
				let ddddd7 = new Date()
				datesOfWeek.Monday = new Date(sumarDias(ddddd1, -4)).toLocaleDateString(),
				datesOfWeek.Tuesday = new Date(sumarDias(ddddd2, -3)).toLocaleDateString(),
				datesOfWeek.Wednesday = new Date(sumarDias(ddddd3, -2)).toLocaleDateString(),
				datesOfWeek.Thursday = new Date(sumarDias(ddddd4, -1)).toLocaleDateString(),
				datesOfWeek.Friday = ddddd5.toLocaleDateString(),
				datesOfWeek.Saturday = new Date(sumarDias(ddddd6, +1)).toLocaleDateString(),
				datesOfWeek.Sunday = new Date(sumarDias(ddddd7, +2)).toLocaleDateString()
				break;	
			case 'Saturday':
				let dddddd1 = new Date()
				let dddddd2 = new Date()
				let dddddd3 = new Date()
				let dddddd4 = new Date()
				let dddddd5 = new Date()
				let dddddd6 = new Date()
				let dddddd7 = new Date()
				datesOfWeek.Monday = new Date(sumarDias(dddddd1, -5)).toLocaleDateString(),
				datesOfWeek.Tuesday = new Date(sumarDias(dddddd2, -4)).toLocaleDateString(),
				datesOfWeek.Wednesday = new Date(sumarDias(dddddd3, -3)).toLocaleDateString(),
				datesOfWeek.Thursday = new Date(sumarDias(dddddd4, -2)).toLocaleDateString(),
				datesOfWeek.Friday = new Date(sumarDias(dddddd5, -1)).toLocaleDateString(),
				datesOfWeek.Saturday = dddddd6.toLocaleDateString(),
				datesOfWeek.Sunday = new Date(sumarDias(dddddd7, +1)).toLocaleDateString()
				break;	
			case 'Sunday':
				let ddddddd1 = new Date()
				let ddddddd2 = new Date()
				let ddddddd3 = new Date()
				let ddddddd4 = new Date()
				let ddddddd5 = new Date()
				let ddddddd6 = new Date()
				let ddddddd7 = new Date()
				datesOfWeek.Monday = new Date(sumarDias(ddddddd1, -5)).toLocaleDateString(),
				datesOfWeek.Tuesday = new Date(sumarDias(ddddddd2, -4)).toLocaleDateString(),
				datesOfWeek.Wednesday = new Date(sumarDias(ddddddd3, -3)).toLocaleDateString(),
				datesOfWeek.Thursday = new Date(sumarDias(ddddddd4, -2)).toLocaleDateString(),
				datesOfWeek.Friday = new Date(sumarDias(ddddddd5, -1)).toLocaleDateString(),
				datesOfWeek.Saturday = new Date(sumarDias(ddddddd6, -1)).toLocaleDateString(),
				datesOfWeek.Sunday = ddddddd7.toLocaleDateString()
				break;	
		}
		console.log(datesOfWeek);
		const { navigation } = this.props
		return (
			<View style={styles.container}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen', {day:datesOfWeek.Monday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Luness</Text>
							<Text style={styles.text}>$ 17.580</Text>
						</View>
					</TouchableOpacity>      
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen',{day:datesOfWeek.Tuesday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Martes</Text>
							<Text style={styles.text}>$ 8.300</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen',{day:datesOfWeek.Wednesday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Miercoles</Text>
							<Text style={styles.text}>$ 12.620</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen',{day:datesOfWeek.Thursday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Jueves</Text>
							<Text style={styles.text}>$ 7.720</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen',{day:datesOfWeek.Friday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Viernes</Text>
							<Text style={styles.text}>$ 2.140</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen',{day:datesOfWeek.Saturday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Sabado</Text>
							<Text style={styles.text}>$ 8.820</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen',{day:datesOfWeek.Sunday})}}>
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
