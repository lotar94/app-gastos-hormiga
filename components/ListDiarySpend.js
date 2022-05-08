import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    title: "Detalle",
    data: ["Fried Shrimps", "Burger", "Risotto","French Fries", "Onion Rings", "Fried Shrimps"]
  }
];

const Separator = () => (
  <View style={styles.separator} />
);

const deleteAmount = ()=> {
  console.log("Eliminar este")
}


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Icon
      style={styles.icon_add_expense}
      name='trash'
      onPress={()=> deleteAmount()}
    />
  </View>
);

export function ListDiarySpend({ navigation }) {

  return (
    <View style={styles.container1}>
      <Text style={styles.text}>Hoy</Text>
      <Text style={styles.text_current_amount}>$3.790</Text>

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

      <Separator />

      <Pressable style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.text_button}>Volver</Text>
      </Pressable>

    </View>    
  )
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

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
    backgroundColor: "#fff",
    textAlign: "center"
  },
  title: {
    fontSize: 24,
    
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: 'Inter_900Black'
  },
  text_current_amount: {
    marginBottom: 40,
    color: 'white',
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: 'Inter_900Black'
  },
  btn_come_back: {
    color: "#FFFFFF",
    backgroundColor: "#F8F8F8"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#347474',
  },
  text_button: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  icon_add_expense: {
    fontSize:33,
    color:'#C50000',
    position: "absolute", 
    alignSelf: "flex-end",
    marginTop: 15,
    paddingRight: 15
  },
  
})