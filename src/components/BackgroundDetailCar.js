import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, View, StatusBar,  } from 'react-native';
import { theme } from '../constants/theme';

export default function BackgroundDetailCar({ children }) {
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
  },
  quadrado: {
    backgroundColor: '#FCCF4D',
    position: 'absolute',
    zIndex: -2,
    left: 0,
    width: 600,
    height: 310,
  },
  quadrado2: {
    backgroundColor: '#F3F3F3',
    position: 'absolute',
    zIndex: -1,
    left: 0,
    marginTop: 250,
    width: '100%',
    height: 210,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  }
})
