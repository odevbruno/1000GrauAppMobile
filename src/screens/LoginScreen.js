import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Subheading, Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../constants/theme';
import Label from '../components/Label';
import { fetchToken } from '../store/reducers/users';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { useDispatch, useSelector } from 'react-redux';
import Botao from '../components/Botao'
import { corAmarelaPadrao, corBlack, corWhite } from '../core/cores'
import Carregamento from '../components/Carregamento';
import CardInputForm from '../components/CardInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MsgText from '../components/MsgText';




export default function LoginScreen({ navigation }) {


  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const data = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [msgEmail, setMsgEmail] = useState(null);
  const [msgSenha, setMsgSenha] = useState(null);
  const ref_input2 = useRef();

  const emailError = emailValidator(emailValue);
  const passwordError = passwordValidator(passwordValue);
  const [msgEror, setMsgError] = useState(null);

  useEffect(async () => {
    if (passwordError !== "valido" && passwordValue === "" && data.error === "Senha incorreta.") {
      setMsgError(null)
    } else {
      setMsgError(data.error)
    }

    try {
      const dataToken = await AsyncStorage.getItem('token');
      if (dataToken !== null) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'SideMenu' }],
        });
      }
    } catch (error) {
      //
    }
  }, [data])


  useLayoutEffect(() => {
    if (emailError == "valido" && emailValue != "") {
      dispatch(fetchToken({ email: emailValue, password: passwordValue }));
    }
  }, [emailValue])

  const onLoginPressed = () => {

    if (emailError != "valido") {
      setMsgEmail(emailError);
    } else {
      setMsgEmail(null);
    }
    if (passwordError != "valido") {
      setMsgSenha(passwordError);
    } else {
      setMsgSenha(null);
    }
    if (emailError == "valido" && passwordError == "valido") {
      dispatch(fetchToken({ email: emailValue, password: passwordValue }));
    }
  }

  const onPressViewPass = () => {
    if (viewPassword == false) {
      setViewPassword(true)
    } else {
      setViewPassword(false)
    }
  }

  return (
    <Background>
      <Logo />

      <CardInputForm
        hint={'Email'}
        valor={emailValue}
        onChange={setEmail}
        tipoTeclado={"email-address"}
        submit={() => ref_input2.current.focus()}
        iconInput={'null'}
        tipoKey={'next'}
      />

      {msgEmail ?
        <View style={styles.contMsg}>
          <Subheading style={styles.subTxtRed}>{msgEmail}</Subheading>
        </View>
        : null}

      <CardInputForm
        hint={'Senha'}
        valor={passwordValue}
        onChange={setPassword}
        tipoKey={'send'}
        senha={viewPassword ? false : true}
        iconInput={'eye'}
        acaoMostrar={onPressViewPass}
        onRef={ref_input2}
        submit={() => onLoginPressed()}
      />

      <View style={styles.contMsg}>
        <Subheading style={styles.subTxtRed}>{msgSenha}</Subheading>
      </View>

      {msgEror != null ?
        <MsgText
          msgPadrao={msgEror}
        />
        : null}

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}  >
          <Text style={styles.forgot}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      {data.loading ? (
        <Carregamento
          corTxt={"white"}
          cor={"white"}
          obj={'Entrando na sua conta, aguarde...'} />
      ) :
        <Botao
          corBotao={corAmarelaPadrao}
          txtBotao={"Entrar"}
          corTxt={corBlack}
          acao={onLoginPressed}
        />
      }
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
    paddingRight: 3,
  },

  subTxtGreen: { color: 'green', fontSize: 14, fontWeight: 'bold', textAlign: 'left' },
  subTxtRed: { color: 'red', fontSize: 14, fontWeight: 'bold', textAlign: 'left' },

  contMsg: { width: '100%', paddingLeft: 3, marginTop: -10 },

  body: {
    marginTop: 50
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  forgot: {
    fontSize: 15,
    color: corWhite,
    fontWeight: "bold"
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },

  containerBG: {
    flex: 1,
  }
});
