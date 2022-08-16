import React from 'react'
import { ImageBackground, SafeAreaView,StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../constants/theme';

export default function Background({ children }) {
  return (
    <SafeAreaView style={styles.containerBG}>

    <ImageBackground
      source={require('../assets/newbg.jpeg')}
      resizeMode='cover'
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: "white",
  },

  containerBG:{
    flex: 1
  },
  container: {
    height: "100%",
    padding: 10,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
