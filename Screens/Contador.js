import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import CompContador from '../components/CompContador'

export default function Contador() {

    const [numero, setnumero] = useState(0)

    function aumentar(){
        if (numero < 21){
            setnumero(parseInt(numero)+1)
        }
        
      }


  return (
    <View style={styles.container} >
      <TextInput
        style={{fontSize: 40}}
        placeholder='ingrese un número'
        onChangeText={(numero)=> setnumero(numero)}
      />
      <Text style={{fontSize: 40}}>numero: {numero}
      </Text>
      <Button
        title='Aumentar en 1'
        onPress={ ()=> aumentar()}
      />
      <Text style={{fontSize: 20}}>Limite: 21
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize:40,
    } 
  });