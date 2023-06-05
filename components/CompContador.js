import { View, Text, Button } from 'react-native'
import React from 'react'

export default function CompContador(prop) {

  console.log(prop)

  return (
    <View>
        <Text>Numero: {prop.numero}</Text>
    </View>
  )
}