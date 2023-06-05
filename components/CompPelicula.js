import { View, Text, StyleSheet, Image,TouchableOpacity, Modal, Button } from 'react-native'
import React, { useState } from 'react'

export default function CompPelicula(prop) {

  const [modalVisible, setmodalVisible] = useState(false)

  return (
    <View>
      <TouchableOpacity onPress={() => setmodalVisible(true)}>
        <Text style={styles.txt}>{prop.datos.title}</Text>
        <Image style={styles.img} source={{uri: 'https://image.tmdb.org/t/p/original/'+ prop.datos.poster_path}}/>
        <Text> </Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}        
      >
      <View style={styles.modal} >
        <Text style={styles.txt3}>{prop.datos.title}</Text>
        <Text style={styles.txt3}> </Text>
        <Text style={styles.txt2}>{'Fecha de lanzamiento: '+ prop.datos.release_date}</Text>
        <Text style={styles.txt3}> </Text>
        <Text style={styles.txt2}>{'Descripcion: '+ prop.datos.overview}</Text>
        <Text style={styles.txt3}> </Text>
        <Button onPress={ ()=> setmodalVisible(false)} title='cerrar'/>
      </View>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
      width: 150,
      height: 150
  },
  txt:{
      fontSize:20
  },
  modal:{
    flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
},
txt2:{
  color: '#ffffff',
  fontSize:20,
},
txt3:{
  fontSize:50,
  color: '#ffffff'
},
  
});
