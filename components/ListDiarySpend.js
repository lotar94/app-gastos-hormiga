import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export function ListDiarySpend({ navigation }) {
  
    // const { navigation } = this.props
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen asdf</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    
    
    )
}

const styles = StyleSheet.create({
  
})