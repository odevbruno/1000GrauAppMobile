import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const css = StyleSheet.create({
    indicaFiltros: {
        height: 25, paddingLeft: 10, paddingRight: 10, marginLeft: 9,
        marginTop: 5, marginBottom: 5, marginRight: 9, justifyContent: 'space-around',
        alignItems: 'center', flexDirection: 'row', backgroundColor: 'white'
    },

    txt: { width: "20%" }

});

export default function ItemsFiltrados({ advertiser, city, anoMin, anoMax, priceMin, priceMax, transmmissao, marca }) {
    return (
        <View style={css.indicaFiltros}>
            <Text>{advertiser}</Text>
            <Text numberOfLines={1} style={css.txt}>{city}</Text>
            <Text numberOfLines={1} style={css.txt}>{transmmissao}</Text>
            <Text numberOfLines={1} style={css.txt}>{marca}</Text>

        </View>

    );
}