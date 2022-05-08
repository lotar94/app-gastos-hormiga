import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, Button, Pressable, Alert, TextInput, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import DiarySpend from './components/DiarySpend';
import WeeklyExpenses from './components/WeeklyExpenses';
import Keyboard from './components/Keyboard';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import  { HomeScreen }  from './components/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen asdf</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  //load the fonts to use
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{
          headerShown: false
        }}>

      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      
      <Stack.Screen name="DiarySpendScreen" component={ DetailsScreen } options={{ title: 'Welcome' }}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
