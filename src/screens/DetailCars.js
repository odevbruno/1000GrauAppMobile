import React from 'react'
import BackgroundDetailCars from '../components/BackgroundDetailCars'
import CardDetailCar from '../components/CardDetailCar'
import Menu from '../components/Menu'
import Search from '../components/Search'
import { StyleSheet, View, FlatList } from 'react-native'

export default function DetailCars({ route, navigation }) {
  return (
    <BackgroundDetailCars>
      <Menu onPress={() => navigation.openDrawer()} />
      <Search />
      <View style={styles.cardcars}>
        <CardDetailCar />
        <CardDetailCar />
        <CardDetailCar />
        <CardDetailCar />
      </View>
    </BackgroundDetailCars>
  )
}

const styles = StyleSheet.create({
  buttonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 10,
  },
  cardcars:{
    marginTop:40
  },
  button_logout:{
    position:'absolute',
    right:0,
    width:100,
  }
})