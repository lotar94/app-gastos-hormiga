import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'

export default class WeeklyExpenses extends Component {
  render() {
    return (
    <View style= {styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.boxSmall}>
            <Text style={styles.text}>Lunes</Text>
            <Text style={styles.text}>$ 17.580</Text>
        </View>
        <View style={styles.boxSmall}>
            <Text style={styles.text}>Martes</Text>
            <Text style={styles.text}>$ 8.300</Text>
        </View>
        <View style={styles.boxSmall}>
            <Text style={styles.text}>Miercoles</Text>
            <Text style={styles.text}>$ 12.620</Text>
        </View>
        <View style={styles.boxSmall}>
            <Text style={styles.text}>Jueves</Text>
            <Text style={styles.text}>$ 7.720</Text>
        </View>
        <View style={styles.boxSmall}>
            <Text style={styles.text}>Viernes</Text>
            <Text style={styles.text}>$ 2.140</Text>
        </View>
        <View style={styles.boxSmall}>
            <Text style={styles.text}>Sabado</Text>
            <Text style={styles.text}>$ 8.820</Text>
        </View>
        <View style={styles.boxSmall}>
            <Text style={styles.text}>Domingo</Text>
            <Text style={styles.text}>$ 13.420</Text>
        </View>
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
        fontFamily: 'Roboto'
    }
})
