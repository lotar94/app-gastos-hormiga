import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import DiarySpend from './components/DiarySpend';
import WeeklyExpenses from './components/WeeklyExpenses';
import Keyboard from './components/Keyboard';

export default function App() {
 
  return (
    <View style={styles.container}>

      <LinearGradient
      colors={['#99D5C2', '#357676', 'transparent']}
      style={styles.gradient}
      >
        <DiarySpend amount={"2.870"}></DiarySpend>

        <WeeklyExpenses style={styles.weekly_expenses}></WeeklyExpenses>

      
      <Keyboard></Keyboard>
      {/* <View>
        <Icon
          style={styles.icon_add_expense}
          name='plus'
          onPress={()=> showKeyBoard()}
        />
      </View> */}

        
      </LinearGradient>
    </View>
  );
}
function showKeyBoard () {
  console.log('llega');
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
  }
});
