import React, { useState, useEffect, useRef } from "react";
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import CardInput from "./CardInput";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Botao from "./Botao";
import { corAmarelaAppBar } from "../core/cores";
import { Divider } from "react-native-elements";

const css = StyleSheet.create({
    containerModal: { marginTop: '40%', width: '100%', backgroundColor: 'white', elevation: 30 },

    botaoFlatlist: { height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingLeft: 10, paddingRight: 10 },

    botao: { height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: corAmarelaAppBar, width: '100%' },

    botaoCircle: {
        height: 40,
        width: 40,
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewbotao: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 17,
        paddingBottom: 10,
        paddingTop: 15,
        flexDirection: 'row',
        paddingLeft: 20,
    },

    txtModal: {
        fontSize: 15,
        color: '#888'
    },
    botaoLimparFiltro: { width: "100%", marginTop: 10, marginBottom: 10, height: 30, alignItems: 'flex-end', paddingRight: 30, justifyContent: 'center', borderRadius: 30 }
});


export default function ModalSelectPrice({ isVisible, close, reference, valorMin, setValorMin, valorMax, setValorMax }) {

    const inputPriceMax = useRef();


    return (

        <Modal
            animationType='slide'
            transparent={true}
            visible={isVisible} >

            <View style={css.containerModal}>

                <View style={css.viewbotao}>
                    <Text style={css.txtModal}>{reference}</Text>
                    <TouchableOpacity
                        onPress={() => close()}
                        style={css.botaoCircle}>
                        <Ionicons name='close' size={30} color={'#888'} />
                    </TouchableOpacity>
                </View>
                <Divider />

                <CardInput
                    hint={'Preço mínimo'}
                    valor={valorMin}
                    onChange={setValorMin}
                    tipoTeclado={'number'}
                    submit={()=> inputPriceMax.current.focus()}
                    tipoKey={'next'}
                />

                <CardInput
                    onRef={inputPriceMax}
                    hint={'Preço máximo'}
                    valor={valorMax}
                    onChange={setValorMax}
                    tipoTeclado={'number'}
                    tipoKey={'send'}
                    submit={()=> close()}
                />


                <TouchableOpacity onPress={() => close()} style={css.botao}>
                    <Text>Confirmar</Text>
                </TouchableOpacity>




            </View>
        </Modal>
    );
}