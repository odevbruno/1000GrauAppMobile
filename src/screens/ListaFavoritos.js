import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { connect, useSelector } from 'react-redux';
import * as actions from '../store/actions/listActions';
import CardDetailCar from '../../src/components/CardDetailCar';
import { limpaLista } from '../store/actions/listActions';
import { Card } from 'react-native-elements';
import Botao from '../components/Botao';
import { corAmarelaAppBar, corBlack } from '../core/cores';
import BotaoLimpar from '../components/BotaoLimpar';




const css = StyleSheet.create({
    bg: {
        flex: 1
    },
    containerheader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    corpo: {
        backgroundColor: 'white',
        width: 160,
        height: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'column'
    },

    footer: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-start'
    },

    Title: {
        paddingTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        paddingRight: 5
    },


    cardSubTitle: {
        fontSize: 12,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#888888',
        width: '100%',
        paddingRight: 5,
    },



    cardFooter: {
        flexDirection: 'row',
        paddingBottom: 8,
        justifyContent: 'space-between',
        paddingRight: 50,
    },

    txtFooter: {
        fontSize: 11,
        color: '#888888',
    },
    containerIMG: {
        height: '100%',
        width: 140,
        padding: 10,
        flexDirection: 'column'
    },
    card: {
        backgroundColor: "white",
        width: '100%',
        height: 150,
        marginRight: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    icon: {
        marginTop: 5,
        height: 25,
        color: 'gray',
    },
    imageLogo: {
        width: '40%',
        height: 35,
        marginRight: 5,
        borderRadius: 5,
        position: 'absolute',
        left: 0
    },
    image: { height: '100%', borderRadius: 5, width: '100%' },


    cardTitle: {
        width: "100%",
        fontSize: 15,
        paddingRight: 10,
        color: '#888888',
    },
    cardValue: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 5
    },
});



function ListaFavoritos(props) {

    const limpaListaFav = () => {
        props.limpaLista()
    }




    return (
        <>
            {props.favItens.length ? (
                <SafeAreaView style={css.bg}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >


                        <BotaoLimpar
                            acao={limpaListaFav}
                            txtBotao={'Limpar lista'}
                        />

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={props.favItens}
                            key={item => item.unique_id}
                            renderItem={({ item }) => <CardDetailCar data={item} />}
                        >

                        </FlatList>
                    </ScrollView>

                </SafeAreaView>
            ) : (
                <SafeAreaView style={css.bg}>
                    <View style={css.containerheader}>
                        <Text>Não há anúncios nos favoritos</Text>
                    </View>
                </SafeAreaView>
            )}
        </>
    );
}





const mapStateToProps = (state) => {
    const { favItens } = state;

    return {
        favItens: favItens,
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        limpaLista: () => dispatch(actions.limpaLista())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListaFavoritos);