import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Form(prop) {

  return (
    <View>
      <Text>Nombre: {prop.name}</Text>
      <Text>Email: {prop.email}</Text>
      <Text>Imagen: </Text>
      <Image style={styles.img} source={{url: prop.url}} />
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
    img: {
        width: 300,
        height: 300
    },
  });