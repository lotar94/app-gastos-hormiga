import React, { useState } from 'react'
import { Keyboard, StyleSheet, View, Modal, Text, Pressable, Alert, TextInput, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import DiarySpend from './DiarySpend';
import WeeklyExpenses from './WeeklyExpenses';
import firebase from '../database/firebase';


const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  

  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  
  return (
    
    <View style={styles.container}>
     
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
          <HideKeyboard>
          <View style={styles.centeredView}>
          
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Nuevo Gasto</Text>
              
                <SafeAreaView>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Monto"
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Description"
                    value={text}
                  />
                </SafeAreaView>
              

              

              <View style= {styles.btn_action_section}>
                <Pressable
                  style={[styles.button, styles.buttonClose_save]}
                  onPress={async () => {
                    if (number === null || text === null || number === '' || text === '') {
                      alert('Ingresa los datos ctm');
                    } else {
                      const data = {
                        date: new Date().toLocaleDateString(),
                        amount: number,
                        description: text
                      }
                      onChangeText(null)
                      onChangeNumber(null)
                      setModalVisible(!modalVisible)
                      await firebase.db.collection('spending').add(data).then((res) => {
                        
                      })
                      
                    }
                  }}
                >
                  <Text style={styles.textStyle}>Guardar</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose_cancel]}
                  onPress={() => {
                    onChangeText(null)
                    onChangeNumber(null)
                    setModalVisible(!modalVisible)
                  }}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </Pressable>
              </View>
            </View>
            
          </View>
          </HideKeyboard>
      </Modal>

      <LinearGradient
      colors={['#99D5C2', '#357676', 'transparent']}
      style={styles.gradient}
      >
         
        <DiarySpend navigation={navigation} ></DiarySpend>

        <WeeklyExpenses style={styles.weekly_expenses}  navigation={navigation}></WeeklyExpenses>

        <View>
          <Icon
            style={styles.icon_add_expense}
            name='plus'
            onPress={()=> setModalVisible(true)}
          />
        </View>
        
       
      </LinearGradient>
      
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#357676',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 50
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
  weekly_expenses: {
    backgroundColor: 'red',
    marginBottom: 300,
    paddingVertical: 300
  },
  icon_add_expense: {
    marginTop: 200,
    marginHorizontal: 145,
    fontSize:80,
    color:'#FF7E67'
  },


  // Modal style init
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose_save: {
    width:90,
    marginEnd: 145,
    backgroundColor: "#ED7F6A",
  },
  buttonClose_cancel: {
    width:90,
    marginEnd: 60,
    backgroundColor: "#35495E",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  // Modal style end

  input: {
    height: 40,
    width:160,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn_action_section: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
    padding: 20,
    height: 87
  },
})