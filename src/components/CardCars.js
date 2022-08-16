import React from 'react';
import { Card } from 'react-native-elements';
import { StyleSheet, Text, Image } from 'react-native';

export default function MyCardCars({results}) {
  return (
    <Card.Divider style={styles.cardcars}>
      {/* <Card.Cover style={styles.image} source={{ uri: 'https://picsum.photos/700' }} /> */}
      <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri:  'https://picsum.photos/700' }}
          />
      <Text style={styles.cardTitle}> Spacefox 1.6 </Text>
    </Card.Divider>
  )
}

const styles = StyleSheet.create({
  cardcars: {
    backgroundColor: '#DADADA',
    width: 85,
    height: 90,
    borderRadius:10,
    marginBottom:15
  },
  image: {
    width: 65,
    height: 50,
    marginLeft: 9,
    marginTop: 10,
    marginBottom: 1,
    borderRadius: 10
  },
  cardTitle: {
    width: 180,
    fontSize: 11,
    color: '#888888',
    marginLeft:5

  },
  cardValue: {
    fontSize: 20,
    padding: 2,
    marginLeft: 10
  }
})