import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import Botao from '../components/Botao'
import { corAmarelaPadrao, corBlack } from '../core/cores'
import CardInput from '../components/CardInput'
import { Subheading } from 'react-native-paper'
import { View } from 'react-native'


export default function ResetPasswordScreen({ navigation }) {

  const [email, setEmail] = useState("");


  const [msg, setMsg] = useState("Insira o seu e-mail para redefinição da senha");


  const sendResetPasswordEmail = () => {

    const emailError = emailValidator(email);

    if (emailError != "valido") {
      setMsg(emailError);
    }

    if (emailError == "valido") {
      setMsg("Aguarde...");
      setEmail({ email: email });
      navigation.navigate('LoginScreen');
      return;
    }

  }




  return (
    <Background>
      <Logo />

      <CardInput
        hint={'E-mail'}
        valor={email}
        onChange={setEmail}
      />


      <View style={{ width: '100%', paddingLeft: 3, marginTop: -10 }}>
        <Subheading style={{ color: 'white', fontSize: 13, textAlign: 'left' }}>{msg}</Subheading>
      </View>


      <Botao
        txtBotao={"Enviar"}
        corBotao={corAmarelaPadrao}
        corTxt={corBlack}
        acao={sendResetPasswordEmail}
      />


    </Background>
  )
}
