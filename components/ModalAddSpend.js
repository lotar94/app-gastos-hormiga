import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class DiarySpend extends Component {
  render() {
    const { amount } = this.props

    const viewDetail = () => {
      
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable_style} onPress={() => { viewDetail() }}>
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

})