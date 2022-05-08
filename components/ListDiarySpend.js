import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    title: "Detalle",
    data: ["$2.890   Fried Shrimps", "$10.540   Burger", "$970   Risotto","$123.460   French Fries", "$350   Onion Rings", "$7.590    Fried Shrimps"]
  }
];


const deleteSpend = ()=> {
  console.log("Eliminar este")
}

const editSpend = ()=> {
  console.log("Editar este")
}

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Icon
      style={styles.icon_edit_expense}
      name='pencil'
      onPress={()=> editSpend()}
    />
    <Icon
      style={styles.icon_add_expense}
      name='trash'
      onPress={()=> deleteSpend()}
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

      <Pressable style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.text_button}>Volver</Text>
      </Pressable>

    </View>    
  )
}

const styles = StyleSheet.create({
  container1:{
    paddingTop: 60,
    paddingBottom: 50,
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
    width: '93%'
  },
  item: {
    backgroundColor: "#347474",
    padding: 20,
    marginVertical: 8,
    borderRadius: 40
  },
  header: {
    fontSize: 32,
    backgroundColor: "#5BB78D",
    textAlign: "center",
    // fontWeight: 'bold',
    fontFamily: 'Inter_900Black',
    color: "#35495E",
    
  },
  title: {
    fontSize: 24,
    color: "#FFFF"
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: 'Inter_900Black'
  },
  text_current_amount: {
    marginBottom: 30,
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
    backgroundColor: '#35495E',
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
    color:'#FF7E67',
    position: "absolute", 
    alignSelf: "flex-end",
    marginTop: 15,
    paddingRight: 25
  },
  icon_edit_expense: {
    fontSize:33,
    color:'#35495E',
    position: "absolute", 
    alignSelf: "flex-end",
    marginTop: 15,
    paddingRight: 65
  }
  
})