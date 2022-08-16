import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import Heart from '../components/Heart';
import Filter from '../components/Filter';



export default function Header({acao}) {
  return (
  <View style={styles.buttonHeader}> 
    <Heart />
    <Filter botaoAcao={acao}/>
  </View>)
}
 

const styles = StyleSheet.create({
  buttonHeader: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    marginLeft: 9,
    marginRight: 9}
  
})
  
  

