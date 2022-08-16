import React from 'react'
import { View, TextInput, TouchableOpacity, MaterialCommunityIcons, StyleSheet } from 'react-native'

import { theme } from '../constants/theme'

export default function Search({ children }) {
    return (
        <View style={styles.searchArea}>
            <TextInput
                style={styles.input}
                placeholder="Pesquise uma pessoa"
                placeholderTextColor="#888"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surfaceHome,
    },
    container: {
        flex: 1,
        width: '100%',
        marginBottom: 350,
        marginTop: 60,
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        marginTop:10,
        height: 50,
        backgroundColor: '#EDF3ED',
        borderRadius: 30,
        fontSize: 19,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#FFFFFF',
        marginRight:15,
        marginLeft:15
      },
    quadrado: {
        backgroundColor: '#FCCF4D',
        position: 'absolute',
        zIndex: -2,
        left: 0,
        width: 600,
        height: 310,
    },
    quadrado2: {
        backgroundColor: 'white',

        position: 'absolute',
        zIndex: -1,
        left: 0,
        marginTop: 250,
        width: '100%',
        height: 210,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    }
})
