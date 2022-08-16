
import React, { useMemo } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import Favorites from './Favorites';
import { useNavigation } from '@react-navigation/native';
import { pt, ptBR } from 'date-fns/locale';
import { formatDistance, subDays, format, intervalToDuration, formatRelative, addDays, parseISO } from 'date-fns';


const styles = StyleSheet.create({
  card: {
    width: "48%", backgroundColor: 'white',
    margin: '1%', shadowColor: '#ececec', elevation: 2, shadowRadius: 2, borderRadius: 5
  },


  locationText: {
    flexDirection: 'row'
  },
  positionText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  },
  positionLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  icon: {
    marginTop: 5,
    marginRight: 10,
    height: 25,
    color: 'gray',
    textAlign: 'right'
  },
  imageLogo: {
    width: 35,
    height: 35,
    bottom: 0,
    marginRight: 10
  },
  image: {
    height: 160, width: '100%'
  },
  Title: {
    paddingTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 10,
    paddingRight: 5
  },

  cardSubTitle: {
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#888888',
    paddingLeft: 10,
    paddingRight: 5,
  },

  cardValue: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    paddingBottom: 5
  },

  cardFooter: {
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },

  txtFooter: {
    fontSize: 11,
    color: '#888888',
  },

  divisor: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginBottom: 5
  }
})


export default function Item({ item }) {

  const navigation = useNavigation();

  let price = item.price;
  let priceValue = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let km = item.odometer;
  let kmEdit = km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let comment = item.version;
  let anoFab = item.year_fabrication;
  let anoModel = item.year_model;
  let veiculo = item.model;
  let cidadeAnuncio = item.seller_city;
  let provedor = item.advertiser;
  let date = item.capture_date;

  const dateParsed = useMemo(
    () =>
      formatRelative(parseISO(date), new Date(), {
        locale: ptBR,
        addSuffix: true,
      }),
    [date],
  );

  return (
    <Card style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('DetailCar', item)}>

        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          source={{ uri: item.photos[0] }}
        >

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


          <Favorites data={item} />
        </ImageBackground>
        <View>
          <Text style={styles.Title}>{veiculo}</Text>
          <View style={{ height: 50 }}>
            <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.cardSubTitle}>{comment}</Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.txtFooter}>{dateParsed}</Text>
          </View>
          <Text style={styles.cardValue}>R$ {priceValue}</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.txtFooter}>{anoFab}/{anoModel}</Text>
            <Text style={styles.txtFooter}>{kmEdit} km</Text>
          </View>
          <View style={styles.divisor} />
          <View style={styles.cardFooter}>
            <Text style={styles.txtFooter}>{cidadeAnuncio}</Text>
          </View>

        </View>
      </TouchableOpacity>
    </Card>
  )
}

