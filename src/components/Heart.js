import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Heart({ }) {

  const navegacao = useNavigation();

  const telaFav = () => {
    navegacao.navigate("ListaFavoritos");
  }


  return (
    <TouchableOpacity onPress={telaFav} style={styles.container}>
      <Ionicons style={styles.image} name="heart" size={20} />
      <Text style={styles.txt}>Lista de favoritos</Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  image: {
    color: '#C4C4C4',
    paddingRight: 7,
    paddingLeft: 7,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,

  },

  txt: { color: '#888888', fontSize: 14 }
})
