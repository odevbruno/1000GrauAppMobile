
import React, {useCallback, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';
import Button from '../components/Button';
import Favorites from '../components/Favorites'
import moment from 'moment'

export default function CartDetail({item}) {
  const  priceValue = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  const opicionais = item.attributes
  const dateAnuncio = moment(item.capture_date, 'DD/MM/YYYY')
  //const anunciaHa = dateAnuncio.endOf('day').fromNow()
  // console.log(anunciaHa);
  // console.log(dateAnuncio);

  const renderItem = useCallback(function renderItem({ item }) {
    return <Text key={item}>{item}</Text>;
  }, []);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button onPress={() => setCount(c => c + 1)} title="Update count" />
  //     ),
  //   });
  // }, [navigation]);
  return (
    
    <Card.Divider style={styles.card}>
      
      <View>
      < Favorites />
        <Text style={styles.cardValue}>R${priceValue}</Text>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardTitle}>{item.year_fabrication + ' - ' + item.year_model}</Text>
        <Text style={styles.cardTitle}>{item.seller_city}</Text>

        <Text style={styles.optional}>Anúciando Em</Text>
        {/* <Text style={styles.cardTitle}>{dateAnuncio}</Text> */}

        <Text style={styles.optional}>Dados do Vendedor</Text>
        <Card style={styles.cardOptinal}>
          <View >
            {item.seller_name != '' && (
              <Text>{item.seller_name}</Text>
            )}
            {item.seller_phone != '' && (
              <Text>{item.seller_phone}</Text>
            )}
          </View>
        </Card>
        {item.seller_phone == '' && (
        <Button style={styles.buttonCall}>
          Visualizar Telefone
        </Button>) 
        }
        <Text style={styles.optional}>Opcionais</Text>
        <Card style={styles.cardOptinal}>
        {/* <FlatList
            data={opicionais}
            renderItem={renderItem}
         /> */}
        <View>
          
        </View>
        </Card>
        <Text style={styles.optional}>Descrição do Anúncio</Text>
        <Card style={styles.cardOptinal}>
          <View >
            <Text>{item.long_comment}</Text>
          </View>
        </Card>
      </View>


    </Card.Divider>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F3F3F3',
    width: '80%',
    height: 1000,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    top: -820,
    left: 40,
    marginTop: 260,
  },

  cardOptinal: {
    marginTop: 5
  },

  optional: {
    fontSize: 18,
    paddingRight: 10,
    paddingLeft: 10,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 15
  },

  icon: {
    marginTop: 5,
    marginRight: 5,
    height: 25,
    color: 'gray',
    position: 'absolute',
    right: 0,
    top: 0
  },

  imageLogo: {
    width: 22,
    height: 22,
    position: 'absolute',
    marginTop: 5,
    marginLeft: 5
  },

  cardTitle: {
    width: '100%',
    fontSize: 18,
    paddingRight: 10,
    paddingLeft: 10,
    color: '#888888',
    marginBottom: 5,
    marginLeft: 10
  },

  cardValue: {
    fontSize: 30,
    padding: 2,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop:30
  },
  buttonCall: {
    width: 300,
    marginTop: 30,
    marginLeft: 15
  }
})