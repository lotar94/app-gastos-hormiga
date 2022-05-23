import React from 'react';
import { StyleSheet, View, Modal, Text, Button } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './components/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListDiarySpend from './components/ListDiarySpend';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {

  //load the fonts to use
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen name="ListDiarySpendScreen" component={ListDiarySpend} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
