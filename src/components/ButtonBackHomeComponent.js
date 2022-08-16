import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'


export default function ButtonBackHome({goBack}) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Icon
        style={styles.image} name="home" size={45}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  image: {
    color:'#C4C4C4',
    borderWidth: 2,
    paddingRight: 7,
    paddingLeft: 7,
    borderColor:'#C4C4C4',
    borderRadius:10,
  },
  home: {
    color:'#C4C4C4',
    borderWidth: 2,
    paddingRight: 7,
    paddingLeft: 7,
    borderColor:'#C4C4C4',
    borderRadius:10,
  },
})
