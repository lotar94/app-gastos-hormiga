import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firebase, { getCurrentUserId } from '../database/firebase';

export default class WeeklyExpenses extends Component {
	constructor(props) {
    super(props);
    this._isMounted = false;
  }

	state = {
		Monday: '',
		MondayAmount: '0',
		Tuesday: '',
		TuesdayAmount: '0',
		Wednesday: '',
		WednesdayAmount: '0',
		Thursday: '',
		ThursdayAmount: '0',
		Friday: '',
		FridayAmount: '0',
		Saturday: '',
		SaturdayAmount: '0',
		Sunday: '',
		SundayAmount: '0'
	}

	componentDidMount() {
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
				this.state.Monday = d1.toLocaleDateString()
				this.state.Tuesday = new Date(sumarDias(d2, +1)).toLocaleDateString()
				this.state.Wednesday = new Date(sumarDias(d3, +2)).toLocaleDateString()
				this.state.Thursday = new Date(sumarDias(d4, +3)).toLocaleDateString()
				this.state.Friday = new Date(sumarDias(d5, +4)).toLocaleDateString()
				this.state.Saturday = new Date(sumarDias(d6, +5)).toLocaleDateString()
				this.state.Sunday = new Date(sumarDias(d7, +6)).toLocaleDateString()
				break;
			case 'Tuesday':
				let dd1 = new Date()
				let dd2 = new Date()
				let dd3 = new Date()
				let dd4 = new Date()
				let dd5 = new Date()
				let dd6 = new Date()
				let dd7 = new Date()
				this.state.Monday = new Date(sumarDias(dd1, -1)).toLocaleDateString()
				this.state.Tuesday = dd2.toLocaleDateString()
				this.state.Wednesday = new Date(sumarDias(dd3, +1)).toLocaleDateString()
				this.state.Thursday = new Date(sumarDias(dd4, +2)).toLocaleDateString()
				this.state.Friday = new Date(sumarDias(dd5, +3)).toLocaleDateString()
				this.state.Saturday = new Date(sumarDias(dd6, +4)).toLocaleDateString()
				this.state.Sunday = new Date(sumarDias(dd7, +5)).toLocaleDateString()
				break;
			case 'Wednesday':
				let ddd1 = new Date()
				let ddd2 = new Date()
				let ddd3 = new Date()
				let ddd4 = new Date()
				let ddd5 = new Date()
				let ddd6 = new Date()
				let ddd7 = new Date()
				this.state.Monday = new Date(sumarDias(ddd1, -2)).toLocaleDateString()
				this.state.Tuesday = new Date(sumarDias(ddd2, -1)).toLocaleDateString()
				this.state.Wednesday = ddd3.toLocaleDateString()
				this.state.Thursday = new Date(sumarDias(ddd4, +2)).toLocaleDateString()
				this.state.Friday = new Date(sumarDias(ddd5, +3)).toLocaleDateString()
				this.state.Saturday = new Date(sumarDias(ddd6, +4)).toLocaleDateString()
				this.state.Sunday = new Date(sumarDias(ddd7, +5)).toLocaleDateString()
				break;
			case 'Thursday':
				let dddd1 = new Date()
				let dddd2 = new Date()
				let dddd3 = new Date()
				let dddd4 = new Date()
				let dddd5 = new Date()
				let dddd6 = new Date()
				let dddd7 = new Date()
				this.state.Monday = new Date(sumarDias(dddd1, -3)).toLocaleDateString()
				this.state.Tuesday = new Date(sumarDias(dddd2, -2)).toLocaleDateString()
				this.state.Wednesday = new Date(sumarDias(dddd3, -1)).toLocaleDateString()
				this.state.Thursday = dddd4.toLocaleDateString()
				this.state.Friday = new Date(sumarDias(dddd5, +1)).toLocaleDateString()
				this.state.Saturday = new Date(sumarDias(dddd6, +2)).toLocaleDateString()
				this.state.Sunday = new Date(sumarDias(dddd7, +3)).toLocaleDateString()
				break;
			case 'Friday':
				let ddddd1 = new Date()
				let ddddd2 = new Date()
				let ddddd3 = new Date()
				let ddddd4 = new Date()
				let ddddd5 = new Date()
				let ddddd6 = new Date()
				let ddddd7 = new Date()
				this.state.Monday = new Date(sumarDias(ddddd1, -4)).toLocaleDateString()
				this.state.Tuesday = new Date(sumarDias(ddddd2, -3)).toLocaleDateString()
				this.state.Wednesday = new Date(sumarDias(ddddd3, -2)).toLocaleDateString()
				this.state.Thursday = new Date(sumarDias(ddddd4, -1)).toLocaleDateString()
				this.state.Friday = ddddd5.toLocaleDateString()
				this.state.Saturday = new Date(sumarDias(ddddd6, +1)).toLocaleDateString()
				this.state.Sunday = new Date(sumarDias(ddddd7, +2)).toLocaleDateString()
				break;	
			case 'Saturday':
				let dddddd1 = new Date()
				let dddddd2 = new Date()
				let dddddd3 = new Date()
				let dddddd4 = new Date()
				let dddddd5 = new Date()
				let dddddd6 = new Date()
				let dddddd7 = new Date()
				this.state.Monday = new Date(sumarDias(dddddd1, -5)).toLocaleDateString()
				this.state.Tuesday = new Date(sumarDias(dddddd2, -4)).toLocaleDateString()
				this.state.Wednesday = new Date(sumarDias(dddddd3, -3)).toLocaleDateString()
				this.state.Thursday = new Date(sumarDias(dddddd4, -2)).toLocaleDateString()
				this.state.Friday = new Date(sumarDias(dddddd5, -1)).toLocaleDateString()
				this.state.Saturday = dddddd6.toLocaleDateString()
				this.state.Sunday = new Date(sumarDias(dddddd7, +1)).toLocaleDateString()
				break;	
			case 'Sunday':
				let ddddddd1 = new Date()
				let ddddddd2 = new Date()
				let ddddddd3 = new Date()
				let ddddddd4 = new Date()
				let ddddddd5 = new Date()
				let ddddddd6 = new Date()
				let ddddddd7 = new Date()
				this.state.Monday = new Date(sumarDias(ddddddd1, -6)).toLocaleDateString()
				this.state.Tuesday = new Date(sumarDias(ddddddd2, -5)).toLocaleDateString()
				this.state.Wednesday = new Date(sumarDias(ddddddd3, -4)).toLocaleDateString()
				this.state.Thursday = new Date(sumarDias(ddddddd4, -3)).toLocaleDateString()
				this.state.Friday = new Date(sumarDias(ddddddd5, -2)).toLocaleDateString()
				this.state.Saturday = new Date(sumarDias(ddddddd6, -1)).toLocaleDateString()
				this.state.Sunday = ddddddd7.toLocaleDateString()
				break;	
		}





    this._isMounted = true
    this._isMounted && this.getAmountSpendedMonday() && this.getAmountSpendedTuesday() && this.getAmountSpendedWednesday() && this.getAmountSpendedThursday() && this.getAmountSpendedFriday() && this.getAmountSpendedSaturday() && this.getAmountSpendedSunday()
  }

	componentWillUnmount() {
    this._isMounted = false
  }

	async getAmountSpendedMonday() {
    let values = []; 
    await firebase.db.collection('spending').where("date", "==", this.state.Monday).where("userId", "==", getCurrentUserId()).onSnapshot(querySnapshot => {
      values = []; 
      querySnapshot.docs.forEach( doc => {
        const {amount} = doc.data()
        values.push(parseInt(amount))
      })
      this._isMounted && this.setState(this.setState({MondayAmount:values.map(item => item).reduce((prev, curr) => prev + curr, 0).toString()}))
    })
  }

	async getAmountSpendedTuesday() {
    let values = []; 
    await firebase.db.collection('spending').where("date", "==", this.state.Tuesday).where("userId", "==", getCurrentUserId()).onSnapshot(querySnapshot => {
      values = []; 
      querySnapshot.docs.forEach( doc => {
        const {amount} = doc.data()
        values.push(parseInt(amount))
      })
      this._isMounted && this.setState(this.setState({TuesdayAmount:values.map(item => item).reduce((prev, curr) => prev + curr, 0).toString()}))
    })
  }

	async getAmountSpendedWednesday() {
    let values = []; 
    await firebase.db.collection('spending').where("date", "==", this.state.Wednesday).where("userId", "==", getCurrentUserId()).onSnapshot(querySnapshot => {
      values = []; 
      querySnapshot.docs.forEach( doc => {
        const {amount} = doc.data()
        values.push(parseInt(amount))
      })
      this._isMounted && this.setState(this.setState({WednesdayAmount:values.map(item => item).reduce((prev, curr) => prev + curr, 0).toString()}))
    })
  }

	async getAmountSpendedThursday() {
    let values = []; 
    await firebase.db.collection('spending').where("date", "==", this.state.Thursday).where("userId", "==", getCurrentUserId()).onSnapshot(querySnapshot => {
      values = []; 
      querySnapshot.docs.forEach( doc => {
        const {amount} = doc.data()
        values.push(parseInt(amount))
      })
      this._isMounted && this.setState(this.setState({ThursdayAmount:values.map(item => item).reduce((prev, curr) => prev + curr, 0).toString()}))
    })
  }

	async getAmountSpendedFriday() {
    let values = []; 
    await firebase.db.collection('spending').where("date", "==", this.state.Friday).where("userId", "==", getCurrentUserId()).onSnapshot(querySnapshot => {
      values = []; 
      querySnapshot.docs.forEach( doc => {
        const {amount} = doc.data()
        values.push(parseInt(amount))
      })
      this._isMounted && this.setState(this.setState({FridayAmount:values.map(item => item).reduce((prev, curr) => prev + curr, 0).toString()}))
    })
  }

	async getAmountSpendedSaturday() {
    let values = []; 
    await firebase.db.collection('spending').where("date", "==", this.state.Saturday).where("userId", "==", getCurrentUserId()).onSnapshot(querySnapshot => {
      values = []; 
      querySnapshot.docs.forEach( doc => {
        const {amount} = doc.data()
        values.push(parseInt(amount))
      })
      this._isMounted && this.setState(this.setState({SaturdayAmount:values.map(item => item).reduce((prev, curr) => prev + curr, 0).toString()}))
    })
  }

	async getAmountSpendedSunday() {
    let values = []; 
    await firebase.db.collection('spending').where("date", "==", this.state.Sunday).where("userId", "==", getCurrentUserId()).onSnapshot(querySnapshot => {
      values = []; 
      querySnapshot.docs.forEach( doc => {
        const {amount} = doc.data()
        values.push(parseInt(amount))
      })
      this._isMounted && this.setState(this.setState({SundayAmount:values.map(item => item).reduce((prev, curr) => prev + curr, 0).toString()}))
    })
  }

	render() {
		
		const { navigation } = this.props
		return (
			<View style={styles.container}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen', {day:this.state.Monday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Luness</Text>
							<Text style={styles.text}>$ {this.state.MondayAmount}</Text>
						</View>
					</TouchableOpacity>      
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen',{day:this.state.Tuesday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Martes</Text>
							<Text style={styles.text}>$ {this.state.TuesdayAmount}</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen',{day:this.state.Wednesday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Miercoles</Text>
							<Text style={styles.text}>$ {this.state.WednesdayAmount}</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen',{day:this.state.Thursday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Jueves</Text>
							<Text style={styles.text}>$ {this.state.ThursdayAmount}</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen',{day:this.state.Friday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Viernes</Text>
							<Text style={styles.text}>$ {this.state.FridayAmount}</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen',{day:this.state.Saturday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Sabado</Text>
							<Text style={styles.text}>$ {this.state.SaturdayAmount}</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('ListDiarySpendScreen',{day:this.state.Sunday})}}>
						<View style={styles.boxSmall}>
							<Text style={styles.text}>Domingo</Text>
							<Text style={styles.text}>$ {this.state.SundayAmount}</Text>
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
