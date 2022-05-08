import React, { Component, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class Keyboard extends Component {
  state = { amount: '' }
  render() {


    let { amount } = this.state

    const addNumber = (number) => {
      this.setState({ amount: this.state.amount + number })
      amount = `${amount}${number}`;
    };
    const setKeyboardVisibility = () => {
      this.setState({ amount: amount.slice(0, -1) })
    }

    return (
      <View>
        <View style={styles.container_amount}>
          <Text style={styles.text_btn_amount}  >{amount}</Text>
          <Icon
            style={styles.icon_add_expense}
            name='backspace'
            onPress={() => { setKeyboardVisibility() }}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn_keyboard} KeyboardType="numeric" onPress={() => { addNumber('1') }}>
            <Text style={styles.text_btn}  >1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_keyboard} onPress={() => { addNumber('2') }}>
            <Text style={styles.text_btn} >2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_keyboard} onPress={() => { addNumber('3') }}>
            <Text style={styles.text_btn} >3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn_keyboard} KeyboardType="numeric" onPress={() => { addNumber('4') }}>
            <Text style={styles.text_btn}  >4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_keyboard} onPress={() => { addNumber('5') }}>
            <Text style={styles.text_btn} >5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_keyboard} onPress={() => { addNumber('6') }}>
            <Text style={styles.text_btn} >6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn_keyboard} KeyboardType="numeric" onPress={() => { addNumber('7') }}>
            <Text style={styles.text_btn}  >7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_keyboard} onPress={() => { addNumber('8') }}>
            <Text style={styles.text_btn} >8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_keyboard} onPress={() => { addNumber('9') }}>
            <Text style={styles.text_btn} >9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn_keyboard} onPress={() => { addNumber('0') }}>
            <Text style={styles.text_btn} >0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn_action_section}>
          <TouchableOpacity>
            <Text style={styles.btn_action_save}
              onPress={() => {
                this.props.onSubmit(amount)
                this.props.cancel();
              }}
            >Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn_action_cancel}
              onPress={() => {
                this.props.cancel();
              }} >Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    height: 67
  },
  btn_keyboard: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#EEECEC",
    margin: 15,
    width: 60,
    height: 60,
    borderRadius: 50
  },
  text_btn: {
    color: '#464646',
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: 'Inter_900Black'
  },
  btn_action_section: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    height: 87
  },
  btn_action_save: {
    backgroundColor: '#C4C4C4',
    color: '#464646',
    paddingBottom: 12,
    paddingTop: 12,
    paddingRight: 25,
    paddingLeft: 25,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'Inter_900Black',
    borderRadius: 5
  },
  btn_action_cancel: {
    backgroundColor: '#C4C4C4',
    paddingBottom: 12,
    paddingTop: 12,
    paddingRight: 25,
    paddingLeft: 25,
    borderRadius: 20,
    color: '#464646',
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'Inter_900Black'
  },
  container_amount: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '85%',
    height: 55
  },
  text_btn_amount: {
    color: '#464646',
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: 'Inter_900Black',
    paddingRight: 15,
    alignItems: 'center',
  },
  icon_add_expense: {
    fontSize: 40,
    color: '#464646'
  }
})
