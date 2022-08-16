import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../constants/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
    icon="menu"
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.button },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: 10,
    marginVertical: 10,
    paddingVertical: 2,
    marginTop:0,
  },
  text: { 
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 26,
    color:'#C4C4C4'
  },
})
