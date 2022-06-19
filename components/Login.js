import React, { useState } from 'react'
import { Keyboard, StyleSheet, View, Text, Pressable, TextInput, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../database/firebase";


const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);


export function Login({ navigation }) {
  
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);

  const auth = getAuth(app);
  
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((res)=>{
      console.log('Res createAccount => ',res);
    })
    .catch((err) => {
      console.log(err);
      alert(err)
    })
  }

  const handleSignIn = (navigation) => {
    
    signInWithEmailAndPassword(auth, email, password)
    .then((res)=> {
      console.log("Signed in!", res);
      navigation.navigate('HomeScreen')
    })
    .catch((err) => {
      console.log(err);
      alert(err)
    })
  }

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <Text style= {styles.text_login}>
        Login
        </Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Correo"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            placeholder="Contraseña"
            keyboardType="password"
            secureTextEntry={true}
            value={password}
          />
          </SafeAreaView>
      
          <Pressable style={styles.button_come_back} onPress={()=> {
            handleSignIn(navigation)
          }}>
            <Text style={styles.text_button}>Ingresar</Text>
          </Pressable>
          <Pressable style={styles.button_come_back} onPress={()=> {
            handleCreateAccount()
          }}>
            <Text style={styles.text_button}>Crear cuenta</Text>
          </Pressable>
          {/* <Pressable style={styles.button_icon_google} onPress={() => googleAuth()}>
            <Icon
              style={styles.icon_google}
              name='google'
            />
          </Pressable> */}
        
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
    width:220,
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
    width: 180,
    marginBottom: 5
  },
  button_icon_google: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#35495E',
    marginTop: 12,
    width: 150

  },
  icon_google : {
    fontSize:17,
    color: 'white'
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