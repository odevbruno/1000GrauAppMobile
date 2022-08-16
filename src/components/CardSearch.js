import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const css = StyleSheet.create({
  buttonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    marginLeft: 9,
    paddingRight: 15,
    marginBottom: 5,
    marginRight: 9
  }

});



export default function CardSearch({ valor, change, acao }) {


  return (
    <View style={css.buttonHeader}>
      <TextInput
        style={{ width: "80%", paddingLeft: 10, marginLeft: 10 }}
        placeholder='Buscar por modelo'
        value={valor}
        onChangeText={change}
      />

      {valor ?
        <TouchableOpacity onPress={() => acao()}>
          <Ionicons name='close' size={20} color={"#888888"} />
        </TouchableOpacity>
        : null}


    </View>
  );
}