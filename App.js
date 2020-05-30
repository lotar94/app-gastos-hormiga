import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      
       <LinearGradient
      //  99D5C2
      //  77AAA5
      //  417E7E
          colors={['#99D5C2', '#357676', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 900,
          }}
        />
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
});
