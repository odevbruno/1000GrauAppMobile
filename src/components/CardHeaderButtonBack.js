import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const css = StyleSheet.create({
    txtTitle: { fontSize: 17, fontWeight: '600', paddingLeft: 5 },
    header: { height: 60, backgroundColor: 'white',  elevation: 5, flexDirection: 'row',paddingRight: 20, alignItems: 'center' },
    icon: {  paddingLeft: 15, justifyContent: 'center', paddingTop: 14, alignItems: 'center',height: '100%', width: 60}
});

export default function CardHeaderButtonBack({ icone, Title }) {

    
    const navegacao = useNavigation();
    return (
        <View style={css.header}>
            <Ionicons style={css.icon} name={icone} size={30} onPress={() => navegacao.navigate('HomeScreen')} />
            <Text style={css.txtTitle}>{Title}</Text>
        </View>
    );
}