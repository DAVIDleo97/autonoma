import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CompPelicula from '../components/CompPelicula'

export default function Peliculas() {



const [peli, setpeli] = useState([])

useEffect(() => {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=$%7bnext%7d")
  .then(response => response.json())
  .then(data => setpeli(data.results))
}, [])

console.log(peli)

  return (
    <View style={styles.container}>
      <FlatList
        data={peli}
        renderItem={({item}) =>
        <CompPelicula datos={item}/>
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
