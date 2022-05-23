import React, { Component, useEffect } from 'react'
import { View , Text, StyleSheet, TouchableOpacity } from 'react-native'
import firebase from '../database/firebase'

export default class DiarySpend extends Component {
  constructor(props) {
    super(props)
    this._isMounted = false
  }
  state = {
    totalAmount: '0'
  }

  componentDidMount() {
    this._isMounted = true
    this._isMounted && this.getSpending()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  async getSpending() {
    
    let values = []; 
    await firebase.db.collection('spending').onSnapshot(querySnapshot => {
      values = []; 
      querySnapshot.docs.forEach( doc => {    
        const {amount} = doc.data()
        values.push(parseInt(amount))
      })
      this._isMounted && this.setState({totalAmount:values.map(item => item).reduce((prev, curr) => prev + curr, 0).toString()})
    })
  }


  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable_style} onPress={()=> {navigation.navigate('ListDiarySpendScreen')}}>
          <View style={styles.box} >
            <Text style={styles.text}>
              Hoy
            </Text>
            <Text style={styles.text}>
              $ {this.state.totalAmount}
            </Text>
          </View>
        </TouchableOpacity>      
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  touchable_style: {
    alignSelf: 'stretch'
  },  
  box: {
    paddingTop: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 160,
    backgroundColor: '#5BB78D',
    borderBottomLeftRadius: 175,
    borderBottomRightRadius: 175
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: 'Inter_900Black'

  }
})