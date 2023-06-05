import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CompPersonajes from '../components/CompPersonajes'
import Form from '../components/Form'

export default function Personajes() {

  const [lista, setlista] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then(response => response.json())
      .then(data => setlista(data.results))
    }, [])
  
  console.log(lista)

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>RICK Y MORTY</Text>
      <FlatList
        data={lista}
        renderItem={({ item }) =>
        <CompPersonajes datos={item}/>
        }
      />
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
  txt:{
    fontSize:60
},
});