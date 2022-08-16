import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const css = StyleSheet.create({

    body: {
        flexDirection: 'row', alignItems: 'center',
        width: 130, paddingLeft: 10
    },

    botao: {
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between', height: 60, paddingRight: 15, backgroundColor: 'white'
    },

    txtFiltros: { fontSize: 16, marginLeft: 10, color: "#454545" },

    txtParams: { fontSize: 12, paddingTop: 3, color: "#454545" },

    txt: { fontSize: 12, marginRight: 5, paddingTop: 3, color: "#454545" },

    divisor: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginBottom: 5, width: '100%'
    },

    cardIndica: { flexDirection: 'row' }
})


export default function ButtonsFilter({ tipoFilter, iconFilter, escolheCategoriaFiltro, param, dataMin, dataMax, precoMin, precoMax }) {
 


    return (
        <View>

            <TouchableOpacity onPress={() => escolheCategoriaFiltro()} style={css.botao}>

                <View style={css.body}>
                    <Ionicons name={iconFilter} size={23} color={"#454545"} />
                    <Text style={css.txtFiltros}>{tipoFilter}</Text>
                </View>

                <View style={css.body}>



                    {tipoFilter == "Km" ?
                        <View>
                            {param != null ?
                                <View style={css.cardIndica}>
                                    <Text style={css.txt}>De até</Text>
                                    <Text style={css.txtParams}>{param} km</Text>
                                </View>
                                : null}
                        </View>
                        : null}

                    {tipoFilter != "Km" ?
                        <View>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={css.txtParams}>{param}</Text>
                        </View>
                        : null}



                    <View>

                        {dataMin != null ?
                            <View>
                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={css.txtParams}>Ano mínimo {dataMin}</Text>
                            </View>
                            : null}


                        {dataMax != null ?
                            <View>
                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={css.txtParams}>Ano máximo {dataMax}</Text>
                            </View>
                            : null}
                    </View>



                    <View>

                        {precoMin != null ?
                            <View>
                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={css.txtParams}>Mínimo R$ {precoMin}</Text>
                            </View>
                            : null}


                        {precoMax != null ?
                            <View>
                                <Text numberOfLines={1} ellipsizeMode={'tail'} style={css.txtParams}>Máximo R$ {precoMax}</Text>
                            </View>
                            : null}
                    </View>



                </View>
            </TouchableOpacity>
            <View style={css.divisor} />
        </View>

    );
}