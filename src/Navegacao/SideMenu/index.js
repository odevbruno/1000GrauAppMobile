import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreen';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen';
import { corAmarelaAppBar, corAmarelaPadrao, corAmareloFraco } from '../../core/cores';
import { theme } from '../../constants/theme';
import Logo from '../../components/Logo';
import { RegisterScreen } from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedbackScreen from '../../screens/FeedbackScreen';
import ListaFavoritos from '../../screens/ListaFavoritos';
import { userLogout } from '../../store/reducers/users'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import BackButton from '../../components/BackButton';
import { userLogoutRegister } from '../../store/reducers/registerUsers';


export default function SideMenu({ navigation }) {


    const Drawer = createDrawerNavigator();

    const css = StyleSheet.create({
        footer: { paddingLeft: 15, backgroundColor: corAmareloFraco, flexDirection: 'row', height: 50, alignContent: 'center', alignItems: 'center' },

    })


    const sairConta = () => {
        Alert.alert("Confirmar saida", "Você tem certeza que deseja sair do app?",
            [
                {
                    text: "Voltar",
                    onPress: () => { },
                    style: "cancel",
                },
                {
                    text: "Confirmar",
                    onPress: () => confirmLogout(),
                    style: "confirm",
                },
            ],
        )


    }

    const confirmLogout = () => {
        userLogout();
        AsyncStorage.removeItem('token');
        navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
        })
    }



    const CostumDrawer = (props) => {
        return (
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>

                    <Logo />
                    <DrawerItemList {...props}>
                    </DrawerItemList>
                </DrawerContentScrollView>
                <View>
                    <TouchableOpacity onPress={() => sairConta()}>
                        <View style={css.footer}>
                            <Ionicons name='exit-outline' size={25} color={'black'} />
                            <Text style={{ marginLeft: 10 }}>Sair da conta</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>

        );
    }


    const voltar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'SideMenu' }],
        });
        userLogoutRegister('false');
    }



    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor: corAmarelaPadrao,
                drawerActiveTintColor: 'black',
                drawerInactiveTintColor: '#888888',
                drawerLabelStyle: {
                    marginLeft: -20,
                }
            }}
            drawerContent={(props) => <CostumDrawer {...props} />}
            initialRouteName="HomeScreen">

            <Drawer.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    title: 'Inicio',
                    headerTitle: '1000 Grau App',
                    headerStyle: {
                        backgroundColor: corAmarelaAppBar
                    },

                    headerTintColor: theme.colors.colortex,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                    drawerIcon: ({ color }) => (
                        <Ionicons name='home-outline' size={20} color={color} />
                    ),
                }} />

            <Drawer.Screen name="ListaFavoritos" component={ListaFavoritos}
                options={{
                    title: 'Favoritos',
                    headerTitle: '1000 Grau App',
                    headerStyle: {
                        backgroundColor: corAmarelaAppBar
                    },

                    headerTintColor: theme.colors.colortex,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    drawerIcon: ({ color }) => (
                        <Ionicons name='heart-outline' size={20} color={color} />
                    )
                }} />



            <Drawer.Screen name="RegisterScreen" component={RegisterScreen}
                options={{
                    title: 'Cadastra usuarios',
                    headerTitle: '1000 Grau App',
                    headerStyle: {
                        backgroundColor: corAmarelaAppBar
                    },

                    headerTintColor: theme.colors.colortex,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    drawerIcon: ({ color }) => (
                        <Ionicons name='person-outline' size={20} color={color} />
                    ),
                    headerShown: true,
                    headerLeft: () => (
                        <BackButton
                            goBack={voltar}
                        />)
                }} />



        </Drawer.Navigator>
    );
}