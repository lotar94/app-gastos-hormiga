import React, { Component } from 'react'
import { View , Text, StyleSheet } from 'react-native'

export default class DiarySpend extends Component {
    render() {
        const { amount } = this.props

        return (
        <View style={styles.container}>
            <View style={styles.box} >
            <Text style={styles.text}>
                Hoy
            </Text>
            <Text style={styles.text}>
                $ {amount}
            </Text>
            </View>
            
        </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    backgroundColor: '#5BB78D',
    borderBottomLeftRadius: 175,
    borderBottomRightRadius: 175
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: 'Roboto'

  }
})