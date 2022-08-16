import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { corAmarelaPadrao, corBlack, corWhite } from '../core/cores'
import Botao from '../components/Botao'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegister, userLogoutRegister } from '../store/reducers/registerUsers'
import CardInputForm from '../components/CardInput';
import MsgText from '../components/MsgText'
import Carregamento from '../components/Carregamento'
import SelectDropdown from 'react-native-select-dropdown'


export default function RegisterScreen({ navigation }) {

  const dataUser = useSelector((state) => state.registerUsers);
  const dispatch = useDispatch();


  const [name, setName] = useState("")
  const [cargo, setCargo] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [msgEmail, setMsgEmail] = useState(null);
  const [msgSenha, setMsgSenha] = useState(null);
  const [msgNome, setMsgNome] = useState(null);
  const [msgCargo, setMsgCargo] = useState(null);
  const [msgValidacao, setMsgValidacao] = useState(null);
  const [viewPassword, setViewPassword] = useState(false);

  const [statusState, setStatusState] = useState(null);
  const cargos = ["Gerente", "Admin", "Operacional", "Técnico"]

  const inputCargo = useRef();
  const inputEmail = useRef();
  const inputSenha = useRef();




  useEffect(() => {
    if (dataUser.error == 'success') {
      Alerta('Parabéns', 'Nova conta criada com sucesso!');
    } else if (dataUser.error == 'Missing Authorization Header') {
      setMsgValidacao('Você não tem autorização para criar conta')
      console.log(dataUser.error)
    }
  }, [dataUser.error]);

  const Alerta = (titulo, msg) => {
    Alert.alert(titulo, msg);
  }

  const onSignUpPressed = () => {
    const nameError = nameValidator(name, 'nome')
    const cargoError = nameValidator(cargo, 'cargo')
    const emailError = emailValidator(email)
    const passwordError = passwordValidator(password)
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
    if (nameError != "valido") {
      setMsgNome(nameError);
    } else {
      setMsgNome(null);
    }
    if (cargoError != "valido") {
      setMsgCargo(cargoError);
    } else {
      setMsgCargo(null);
    }
    if (emailError == "valido" && passwordError == "valido" && nameError == "valido" && cargoError == "valido") {
      dispatch(fetchRegister({ name: name, cargo: cargo, email: email, password: password }));
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
    <>
      <Background>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Logo />

          <SelectDropdown
            buttonTextStyle={styles.botaoTxtDropdown}
            data={cargos}
            onSelect={(selectedItem, index) => {
              setCargo(selectedItem);
            }}
            buttonStyle={styles.botaoDrop}
            defaultButtonText={'Selecione o cargo'}
            dropdownStyle={{ backgroundColor: 'white' }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
          />

          <MsgText
            msgPadrao={msgCargo}
          />

          <CardInputForm
            hint={'Nome'}
            valor={name}
            onChange={setName}
            tipoTeclado={"default"}
            submit={() => inputEmail.current.focus()}
            iconInput={'null'}
            tipoKey={'next'}
          />

          <MsgText
            msgPadrao={msgNome}
          />

          <CardInputForm
            hint={'Email'}
            valor={email}
            onChange={setEmail}
            tipoTeclado={"email-address"}
            submit={() => inputSenha.current.focus()}
            onRef={inputEmail}
            acaoMostrar={onPressViewPass}
            iconInput={'null'}
            tipoKey={'next'}
          />

          <MsgText
            msgPadrao={msgEmail}
          />

          <CardInputForm
            hint={'Senha'}
            valor={password}
            onChange={setPassword}
            senha={viewPassword ? false : true}
            onRef={inputSenha}
            iconInput={'eye'}
            submit={() => onSignUpPressed()}
            acaoMostrar={onPressViewPass}
            tipoKey={'send'}
          />

          {msgSenha ?
            <MsgText
              msgPadrao={msgSenha}
            />
            : null}

          {msgValidacao ?
            <MsgText
              msgPadrao={msgValidacao}
            />
            : null}

          {dataUser.loading ?
            <Carregamento
              corTxt={"white"}
              obj={'Criando nova conta...'}
              cor={'white'} />
            :
            <Botao
              txtBotao={"Registrar"}
              corBotao={corAmarelaPadrao}
              corTxt={corBlack}
              acao={onSignUpPressed}
            />

          }
        </ScrollView>
      </Background>
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  subTxtGreen: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  subTxtRed: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  contMsg: {
    width: '100%',
    paddingLeft: 3,
    marginTop: -10
  },
  botaoDrop: {
    width: 320,
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: -8,
    marginBottom: 5
  },
  botaoTxtDropdown: {
    textAlign: 'left',
    fontSize: 16,
    color: 'black'
  }
})
