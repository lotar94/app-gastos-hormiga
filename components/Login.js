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


export function Login({ navigation }) {
  
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <Text style= {styles.text_login}>
        Login
        </Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Correo"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Contraseña"
            value={text}
          />
          </SafeAreaView>
      
          <Pressable style={styles.button_come_back} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.text_button}>Ingresar</Text>
          </Pressable>
        
      </View>
    </HideKeyboard>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#357676',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width:200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15
  },
  button_come_back: {
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
  text_login: {
    color: 'white',
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: 'Inter_900Black',
  }
})