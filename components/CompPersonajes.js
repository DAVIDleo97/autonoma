import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function CompPersonajes(prop) {
  return (
    <View>
      <Text style={styles.txt}>{prop.datos.name}</Text>
      <Image style={styles.img} source={{uri: prop.datos.image}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 200
    },
    txt:{
        fontSize:25
    },
    
});