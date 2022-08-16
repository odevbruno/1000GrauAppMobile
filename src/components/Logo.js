import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image resizeMode="contain" source={require('../assets/logo.jpeg')} style={styles.image} />
}
 

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
    marginBottom: 30,
  },
})
