import { View, Text, TextInput, StyleSheet, FlatList  } from 'react-native'
import React, { useState } from 'react'
import Form from '../components/Form'

export default function Datos() {

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [url, seturl] = useState('')

  return (
    <View style={styles.container}>
        <TextInput style={styles.view1}
          placeholder='ingrese el nombre'
          value={name}
          onChangeText={(name)=> setname(name)}
        />
        <TextInput style={styles.view1}
          placeholder='ingrese correo'
          value={email}
          onChangeText={(email)=> setemail(email)}
        />
        
        <TextInput style={styles.view1}
          placeholder='ingrese url'
          value={url}
          onChangeText={(url)=> seturl(url)}
        />
        <Form style={{alignItems:'center'}} name={name}
        email={email}
        url={url}/>
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
  view1: {
      top: -80,
      fontSize: 25
  },
});