import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/constants/theme'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MenuSideBar from './src/screens/MenuSideBar'
import BackButton from './src/components/BackButton'
import configureStore, { Store, store } from './src/store/configureStore.js';
import { Button, View, Text, TouchableOpacity, StatusBar, LogBox } from 'react-native'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import DetailCar from './src/screens/DetailCar';
import DetailCars from './src/screens/DetailCars';
import FilterScreen from './src/screens/FilterScreen';
import { Provider } from 'react-redux'
import { corAmarelaAppBar, corAmarelaPadrao, corBlack } from './src/core/cores'
import SideMenu from './src/Navegacao/SideMenu';
import ListaFavoritos from './src/screens/ListaFavoritos'




export default function App() {
  const Stack = createStackNavigator();

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store} theme={theme}>
      <NavigationContainer>
        <StatusBar hidden={true} />

        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
          }}
        >

          <Stack.Screen name="StartScreen" component={StartScreen}
            options={{
              headerShown: false,
            }} />




          <Stack.Screen name="LoginScreen" component={LoginScreen}
            options={{
              headerShown: false,
              headerTitle: "Acessar app",
              headerShadowVisible: true,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: corBlack,
              }
            }} />



          <Stack.Screen name="SideMenu" component={SideMenu}
            options={{
              headerShown: false,
              headerTitle: 'Voltar',
              title: 'Voltar'
            }} />



          <Stack.Screen name="RegisterScreen" component={RegisterScreen}
            options={{
              headerShown: false,
              headerTitle: 'Cadastro de Usários',
              headerShadowVisible: true,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: corBlack,
              }
            }} />



          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
            options={{
              headerShown: false,
              headerTitle: 'Redefinição de senha',
              headerShadowVisible: true,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: corBlack,
              }
            }}
          />


          <Stack.Screen name="DetailCar" component={DetailCar}
            options={{
              headerShown: true,
              headerTitle: "Detalhes do anúncio"
            }}
            screenOptions={{

            }} />



          <Stack.Screen name="DetailCars" component={DetailCars} screenOptions={{

          }} />

          <Stack.Screen name="FilterScreen" component={FilterScreen}
            options={{ 
              headerTitle: 'Escolha os filtros',
              headerStyle: {
                backgroundColor: corAmarelaAppBar
              },
              headerTintColor: theme.colors.colortex,
            }} />

         




          <Stack.Screen name="ListaFavoritos" component={ListaFavoritos}
            options={{
              headerShown: true,
              headerTitle: "Lista de favoritos"
            }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )

}
