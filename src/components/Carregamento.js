import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';




export default function Carregamento({obj, cor, corTxt}) {

    const css = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
        },
    
        load: { marginTop: 30 },
    
        txt: {
            marginTop: 10,
            fontSize: 16,
            color: corTxt
        }
    })
    return (
        <View style={css.container}>
            <ActivityIndicator style={css.load} color={cor} size={30} />
            <Text style={css.txt}>{obj}</Text>
        </View>

    );
}