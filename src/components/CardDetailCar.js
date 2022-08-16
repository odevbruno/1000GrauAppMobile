
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements';
import Botao from './Botao';
import { corAmarelaAppBar, corBlack } from '../core/cores';
import { useNavigation } from '@react-navigation/native';

export default function MyCard({ data, navigation }) {

  const navegacao = useNavigation();

  let nome = data.anuncio.model;
  let marca = data.anuncio.make;
  let valor = data.anuncio.price;
  let provedor = data.anuncio.advertiser;
  let fotoThumb = data.anuncio.photos[0];
  let anoFab = data.anuncio.year_fabrication;
  let anoModel = data.anuncio.year_model;
  let km = data.anuncio.odometer;
  let kmEdit = km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let comment = data.anuncio.version;

  let priceValue = valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


  return (
    <Card.Divider style={styles.card}>
        <View style={styles.containerIMG}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: fotoThumb }}
          />


          {provedor == "Olx" &&
            <Image
              style={styles.imageLogo}
              resizeMode='contain'
              source={require('../assets/Logo_olx.png')}
            />}

          {provedor == "Mercadolivre" &&
            <Image
              style={styles.imageLogo}
              resizeMode='contain'
              source={require('../assets/mercadolivre.jpg')}
            />}

          {provedor == "Webmotors" &&
            <Image
              style={styles.imageLogo}
              resizeMode='contain'
              source={require('../assets/webMotors.png')}
            />}

          {provedor == 'Mercadoavalia' &&
            <Image
              style={styles.imageLogo}
              resizeMode="cover"
              source={require('../assets/avalia.png')}
            />
          }

        </View>
        <View style={styles.corpo}>
          <Text style={styles.Title}>{nome} {marca}</Text>
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.cardSubTitle}>{comment}</Text>

          <Text style={styles.cardValue}>R$ {priceValue}</Text>


        </View>
    </Card.Divider>
  )
}

const styles = StyleSheet.create({
  corpo: {
    backgroundColor: 'white',
    width: '100%',
    height: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column'
  },

  footer: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start'
  },

  Title: {
    paddingTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    paddingRight: 5
  },


  cardSubTitle: {
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#888888',
    width: 200,
    paddingRight: 5,
  },



  cardFooter: {
    flexDirection: 'row',
    paddingBottom: 8,
    justifyContent: 'space-between',
    paddingRight: 50,
  },

  txtFooter: {
    fontSize: 11,
    color: '#888888',
  },
  containerIMG: {
    height: '100%',
    width: 140,
    padding: 10,
    flexDirection: 'column'
  },
  card: {
    backgroundColor: "white",
    width: '100%',
    height: 110,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },

  icon: {
    marginTop: 5,
    height: 25,
    color: 'gray',
  },
  imageLogo: {
    width: '20%',
    height: 35,
    marginTop: 5,
    marginRight: 5,
    borderRadius: 5,
    position: 'absolute',
    left: 0
  },
  image: { height: '100%', borderRadius: 5, width: '100%' },


  cardTitle: {
    width: "100%",
    fontSize: 15,
    paddingRight: 10,
    color: '#888888',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5
  },
})