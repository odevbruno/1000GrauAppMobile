import React, { useState } from 'react'
import { TouchableOpacity, Image, StyleSheet, Alert, Modal, Text, Pressable, View, Picker } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({

  image: {
    color: '#C4C4C4',
    paddingRight: 7,
    paddingLeft: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 30, 
  },

  dropdownStyle: {
    width: 180
  },

  dropdown2BtnStyle: {
    backgroundColor: 'white',
    width: 180
  },

  buttonSend: {
    width: 200,
    marginLeft: 80,
    marginTop: 5,
    color: 'white'
  },

  imageClose: {
    color: 'black',
    marginLeft: 40
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalBackground: {
    backgroundColor: '#FFFFFF',
    width: 370,
    height: 310,
    borderRadius: 20,
  },

  header: {
    backgroundColor: '#FCCF4D',
    width: 370,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10
  },

  styleHeaderText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 50
  },

});


export default function Filter({ navigation, botaoAcao }) {


  return ( 
      <TouchableOpacity   onPress={() => botaoAcao()} style={styles.container}>

        <Ionicons style={styles.image} name="filter" size={22} />
        <Text style={{ color: '#888888', fontSize: 14 }}>Todos os filtros</Text>

      </TouchableOpacity> 
  )
}


