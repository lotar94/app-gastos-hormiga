import React, { Component } from 'react'
import { View , Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class DiarySpend extends Component {
  render() {
    const { amount } = this.props
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable_style} onPress={()=> {navigation.navigate('ListDiarySpendScreen')}}>
          <View style={styles.box} >
          <Text style={styles.text}>
            Hoy
          </Text>
          <Text style={styles.text}>
            $ {amount}
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