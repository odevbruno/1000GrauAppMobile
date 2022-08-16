import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper'
import { theme } from '../constants/theme';
import { corAmarelaEscuro, corAmarelaPadrao } from '../core/cores';

import Ionicons from 'react-native-vector-icons/Ionicons';




const css = StyleSheet.create({


    cardInput: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 10

    },


    headerCard: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        marginLeft: 5
    },


    fontCard: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',

    },

    styleInput: {
        fontSize: 15,
        marginBottom: 10,
        backgroundColor: 'white',
        color: 'white',
        fontSize: 16,
        height: 50,
        width: '100%',
        paddingLeft: 5
    }


});


export default function CardInput({ titulo, hint, submit, icone, onRef, valor, senha, onChange, iconInput, acaoMostrar, tipoKey, qntdLetras, txt }) {

    return (

        <View style={{ width: '100%', }}>


            {iconInput != 'null' ?
                <TextInput
                    style={css.styleInput}
                    selectionColor={theme.colors.primary}
                    activeOutlineColor={corAmarelaPadrao}
                    underlineColor={"transparent"}
                    activeUnderlineColor={corAmarelaEscuro}
                    mode='flat'
                    placeholder={hint}
                    valor={valor}
                    onChangeText={onChange}
                    secureTextEntry={senha}
                    returnKeyType={tipoKey}
                    blurOnSubmit={false}
                    onSubmitEditing={submit}
                    ref={onRef}
                    right={<TextInput.Icon name={iconInput} onPress={() => acaoMostrar()} />}
                />
                :

                <TextInput
                    style={css.styleInput}
                    selectionColor={theme.colors.primary}
                    activeOutlineColor={corAmarelaPadrao}
                    underlineColor={"transparent"}
                    activeUnderlineColor={corAmarelaEscuro}
                    mode='flat'
                    placeholder={hint}
                    valor={valor}
                    onChangeText={onChange}
                    secureTextEntry={senha}
                    returnKeyType={tipoKey}
                    blurOnSubmit={false}
                    onSubmitEditing={submit}
                    ref={onRef} 
                />

            }

        </View>


    );
}


