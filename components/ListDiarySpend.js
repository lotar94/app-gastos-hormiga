import React, { Component, useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, TextInput, View, SafeAreaView, SectionList, StatusBar, Pressable, Modal, TouchableWithoutFeedback } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from "../database/firebase";

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
export default class ListDiarySpend extends Component {
  constructor(props) {
    super(props)
    this._isMounted = false
  }
  

  state = {
    DATA: [
      {
        title: "Detalle",
        data: []
      }
    ],
    totalAmount: '0',
    modalVisible:false,
    text:null,
    number:null
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
    let amountValues = [];
    await firebase.db.collection("spending").onSnapshot((querySnapshot) => {
      values = [];
      amountValues = [];
      querySnapshot.docs.forEach((doc) => {
        const { amount, description } = doc.data();
        amountValues.push(parseInt(amount))
        values.push({info:`$${amount}   ${description}`, id: doc.id});
      });
      this._isMounted && this.setState({totalAmount:amountValues.map(item => item).reduce((prev, curr) => prev + curr, 0).toString()})
      this._isMounted && this.setState({DATA:[{title: "Detalle", data: values}]})
    });
  }

  async deleteSpending(id) {
    await firebase.db.collection("spending").doc(id).delete();
  }

  deleteSpend(id) {
    console.log("Eliminar este ", id)
    this.deleteSpending(id)
  }

  editSpend(id) {
    console.log("Editar este", id)
  }

  render() {

    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title.info}</Text>
        <Icon
          style={styles.icon_edit_expense}
          name='pencil'
          onPress={()=> this.editSpend(title.id)}
        />
        <Icon
          style={styles.icon_add_expense}
          name='trash'
          onPress={()=> this.deleteSpend(title.id)}
        />
      </View>
    );
    const { navigation } = this.props
    return (
      <View style={styles.container1}>

{/* 

        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.setState({modalVisible: !modalVisible})
          
        }}>
          <HideKeyboard>
          <View style={styles.centeredView}>
          
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Nuevo Gasto</Text>
              
                <SafeAreaView>
                  <TextInput
                    style={styles.input}
                    onChangeText={this.setState({number:number})}
                    value={number}
                    placeholder="Monto"
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={this.setState({text: this.state.text})}
                    placeholder="Description"
                    value={text}
                  />
                </SafeAreaView>
              

              

              <View style= {styles.btn_action_section}>
                <Pressable
                  style={[styles.button, styles.buttonClose_save]}
                  onPress={async () => {
                    if (this.state.number === null || this.state.text === null || this.state.number === '' || this.state.text === '') {
                      alert('Ingresa los datos ctm');
                    } else {
                      const data = {
                        amount: this.state.number,
                        description: this.state.text
                      }
                      this.setState({number: null})
                      this.setState({text: null})
                      this.setState({modalVisible: !modalVisible})
                      await firebase.db.collection('spending').add(data);
                      
                    }
                  }}
                >
                  <Text style={styles.textStyle}>Guardar</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose_cancel]}
                  onPress={() => {
                    this.setState({number: null})
                    this.setState({text: null})
                    this.setState({modalVisible: !modalVisible})
                  }}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </Pressable>
              </View>
            </View>
            
          </View>
          </HideKeyboard>
        </Modal>


 */}






        
        <Text style={styles.text}>Hoy</Text>
        <Text style={styles.text_current_amount}>${this.state.totalAmount}</Text>

        <SafeAreaView style={styles.container}>
          <SectionList
            sections={this.state.DATA}
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