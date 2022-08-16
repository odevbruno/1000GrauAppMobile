
import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-elements';
import Favorites from '../components/Favorites';
import { useNavigation } from '@react-navigation/native';

export default function Item({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailCar', item)} >
      <Card.Divider
        style={styles.card}>
        <Favorites />
        {item.advertiser == 'olx' &&
          <Image
            style={styles.imageLogo}
            resizeMode="cover"
            source={require('../assets/logo-olx.jpeg')}
          />
        }
        <View style={styles.positionImageTexte} >
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: item.photos[0] }}
          />
          <View>
            <Text style={styles.cardTitle}>{item.model}</Text>
            <Text style={styles.cardValue}>R$ {item.price}</Text>
          </View>
        </View>
      </Card.Divider>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DADADA',
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10
  },
  positionImageTexte: {
    flexDirection: 'row',
    justifyContent:'center'

  },
  icon: {
    marginTop: 5,
    marginRight: 10,
    height: 25,
    color: 'gray',
    textAlign: 'right'
  },
  imageLogo: {
    width: 22,
    height: 22,
    position: 'absolute',
    marginLeft: 10,
    marginTop: 5,
  },
  image: {
    width: 137,
    height: 94,
    marginTop: 1,
    marginBottom: 10,
    borderRadius: 10
  },
  cardTitle: {
    width: 180,
    fontSize: 15,
    paddingRight: 10,
    paddingLeft: 10,
    textAlign: 'center',
    color: '#888888'
  },
  cardValue: {
    fontSize: 20,
    padding: 2,
    fontWeight: 'bold',
    marginLeft: 10
  }
})