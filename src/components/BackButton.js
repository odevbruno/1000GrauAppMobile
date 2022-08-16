import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        color={'black'}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: { 
    left: 8, 
  },
  image: {
    width: 30,
    height: 30,
  },
})
