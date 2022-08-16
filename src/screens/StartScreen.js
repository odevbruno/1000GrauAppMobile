import React from 'react'
import {StyleSheet} from 'react-native';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import Botao from '../components/Botao'
import { corAmarelaPadrao, corBlack, corWhite } from '../core/cores'


const css = StyleSheet.create({
  sloga:{color: corWhite, marginTop: 20, fontSize: 15, fontWeight: "bold"}
}) 

export default function StartScreen({ navigation }) {


  return (
    <Background>


      <Logo/>
      <Paragraph style={css.sloga}>
        O App com as melhores opções de compra.
      </Paragraph>


      <Botao
        txtBotao={"Entrar"}
        corBotao={corAmarelaPadrao}
        corTxt={corBlack}
        acao={() => navigation.navigate('LoginScreen')}
      />
 

    </Background>
  )
}
