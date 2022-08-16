import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Divider } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';

const css = StyleSheet.create({
    containerModal: {
        height: '100%',
        marginTop: '20%',
        backgroundColor: 'white',
        elevation: 30,
    },

    botaoFlatlist: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingRight: 10
    },

    botaoLimparFiltro: {
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
        height: 30,
        alignItems: 'flex-end',
        paddingRight: 30,
        justifyContent: 'center',
        borderRadius: 30
    },

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
    }
});


export default function ModalSelect({ isVisible, close, data, fecharNoItem, reference }) {


    return (

        <Modal
            animationType='slide'
            transparent={true}
            visible={isVisible} >

            <View style={css.containerModal}>

                <View style={css.viewbotao}>
                    <Text style={css.txtModal}>{reference}</Text>
                    <TouchableOpacity
                        onPress={() => fecharNoItem()}
                        style={css.botaoCircle}>
                        <Ionicons name='close' size={30} color={'#888'} />
                    </TouchableOpacity>
                </View>
                <Divider />
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity onPress={() => close(item)} style={css.botaoFlatlist}>
                                <Text style={{ fontSize: 18, width: '80%' }}>{item.ref}</Text>
                                <Text style={{ fontSize: 17 }}>{item.qtd}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        </Modal>
    );
}