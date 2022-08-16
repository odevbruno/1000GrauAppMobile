import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { StyleSheet, Text, View } from "react-native";
import Logo from '../components/Logo';
import ButtonMenu from '../components/ButtonMenu';
import {userLogoutRegister} from '../store/reducers/registerUsers'
import { useDispatch} from 'react-redux';

export default function MenuSideBar({ navigation }) {
  const dispatch = useDispatch()

const onSignUpPressed = () => {
    dispatch(userLogoutRegister())
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'RegisterScreen' }]
        })
      
      }, 1000);
  }
  return (
    <DrawerContentScrollView>
      <View style={styles.MenuSideBar} >
        <Logo />
        <Text style={styles.MenuSideBarTitle} >1000 Grau App</Text>
        <ButtonMenu style={styles.MenuSideBarButton} onPress={() => navigation.navigate('HomeScreen')} >Home</ButtonMenu>
        <ButtonMenu style={styles.MenuSideBarButton} onPress={() => navigation.navigate('DetailCars')} >Busca Avançada</ButtonMenu>
        <ButtonMenu style={styles.MenuSideBarButton} onPress={onSignUpPressed} >Cadastro de Usuário</ButtonMenu>
        <ButtonMenu style={styles.MenuSideBarButton} onPress={() => navigation.navigate('LoginScreen')} >Sair</ButtonMenu>
        
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  MenuSideBar:{
    alignItems:'center'
  },
  MenuSideBarTitle:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:50
  },
  MenuSideBarButton:{
    width:260,
    marginBottom:30
  }
})