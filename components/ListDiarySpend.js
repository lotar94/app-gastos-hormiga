import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Button } from "react-native";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export function ListDiarySpend({ navigation }) {

  return (
    <View style={styles.container1}>
      <Text  style={styles.text}>Hoy</Text>
      <Text  style={styles.text}>$3.790</Text>

      <Text  style={styles.text_detail}>Detalle</Text>

      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>

      <Button
      title="Volver"
      onPress={() => navigation.navigate('HomeScreen')}
      />

    </View>    
  )
}

const styles = StyleSheet.create({

  container1:{
    paddingTop: 60,
    paddingBottom: 55,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5BB78D',
    width: '100%'
    
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    width: '90%'
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: 'Inter_900Black'
  },
  text_detail: {
    marginTop: 40,
    marginBottom: 20,
    color: 'white',
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: 'Inter_900Black'
  }
  
})