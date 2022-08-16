import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-paper';
import { theme } from '../constants/theme'




export default function Botao({ txtBotao, corBotao, corTxt, acao }) {


    const css = StyleSheet.create({
        button: {
            width: '100%',
            height: 47,
            borderRadius: 30,
            borderWidth: 0,
            elevation: 10,
            justifyContent: 'space-around',
            backgroundColor: corBotao,
            marginTop: 15
        },
        text: {
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 26,
            width: '100%',
            color: corTxt
        },
    })

    return (
        <Button
            onPress={() => acao()}
            style={css.button}>
            <Text style={css.text}>{txtBotao}</Text>
        </Button>
    );
}