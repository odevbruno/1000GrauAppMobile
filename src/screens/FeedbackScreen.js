import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'

import ButtonAcessar from '../components/Button'
import Paragraph from '../components/Paragraph'
import { View } from "react-native";

export default function FeedbackScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <View>
        <Paragraph>
          Cadastro
        </Paragraph>
        <Paragraph>
          Completo
        </Paragraph>
        <ButtonAcessar
        mode="contained"
        style={{marginTop:60}}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Continue
      </ButtonAcessar>
      </View>
    </Background>
  )
}
