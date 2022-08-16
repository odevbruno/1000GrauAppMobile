import React from 'react';
import { View , TouchableOpacity, StyleSheet, Text} from 'react-native';



const css = StyleSheet.create({
    containerBotao: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end', paddingRight: 10
    },
    botaoLimparFiltro: {
        width: 120, marginTop: 10,
        backgroundColor: 'white', marginBottom: 10, height: 35,
        alignItems: 'center', justifyContent: 'center', borderRadius: 30
    },
})

export default function BotaoLimpar({txtBotao, acao}) {
    return (
        <View style={css.containerBotao}>
            <TouchableOpacity style={css.botaoLimparFiltro} onPress={() => acao()}>
                <Text>{txtBotao}</Text>
            </TouchableOpacity>
        </View>
    );
}