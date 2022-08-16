import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../constants/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
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
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius:30,
    marginTop:0,
    backgroundColor: theme.colors.button,
    color:'#fff'
  },
  text: { 
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 26,
    color:'#fff'
  },
})
