import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, View, SafeAreaView, StatusBar, Text } from 'react-native'

import { theme } from '../constants/theme'

export default function BackgroundDetailCars({ children }) {
  return (
    <ImageBackground
      resizeMode="repeat"
      style={styles.background}
    >
      <View>
        <StatusBar />
        <View style={styles.quadrado} />
        <View style={styles.quadrado2} />
      </View>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surfaceHome,
  },
  container: {
    flex: 1,
    width: '100%',
    marginTop: 2,
    paddingLeft: 20,
    paddingRight: 20
  },

  quadrado: {
    backgroundColor: '#FCCF4D',
    position: 'absolute',
    zIndex: -2,
    left: 0,
    marginTop: 750,
    width: 600,
    height: 310,
  },
  quadrado2: {
     backgroundColor: '#F3F3F3',
    position: 'absolute',
    zIndex: -1,
    left: 0,
    marginTop: 570,
    width: '100%',
    height: 210,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  }
})
