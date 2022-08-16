import React, { useEffect, useMemo, useState } from 'react';
import { View, SafeAreaView, StyleSheet, Linking, Image, Text, ScrollView, FlatList, Alert, Dimensions } from 'react-native';
import CardHeaderButtonBack from '../components/CardHeaderButtonBack';
import { SliderBox } from "react-native-image-slider-box";
import { formatDistance, subDays, format, intervalToDuration, formatRelative, addDays, parseISO } from 'date-fns';
import Botao from '../components/Botao';
import { corAmarelaAppBar, corBlack } from '../core/cores';
import { pt, ptBR } from 'date-fns/locale';



export default function DetailCar({ route }) {

  let Images = route.params.photos;
  let Veiculo = route.params.model;
  let Comment = route.params.version;
  let price = route.params.price;
  let km = route.params.odometer;
  let priceValue = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let kmEdit = km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let cidade = route.params.seller_city;
  let anoFab = route.params.year_fabrication;
  let anoModel = route.params.year_model;
  let transmission = route.params.transmission;
  let portas = route.params.number_ports;
  let tipo = route.params.body_type;
  let cor = route.params.color;
  let numeroAnuncio = route.params.seller_phone;

  let vidro = route.params.attributes;
  let LongComent = route.params.long_comment;
  let dataPostagem = route.params.capture_date;
  let siteAnunciante = route.params.advertiser;

  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;

  
const css = StyleSheet.create({
  containerBG: {
    flex: 1,
    backgroundColor: 'white'
  },
  img: { height: 360, width: '100%' },
  Title: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#080808',
    paddingLeft: 15,
    paddingRight: 15
  },

  TitlePrice: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#080808',
    paddingLeft: 15,
    paddingRight: 15
  },

  cardSubTitle: {
    fontSize: 13,
    paddingBottom: 5,
    color: '#888888',
    paddingLeft: 15,
    paddingRight: 15
  },

  txtSub: {
    fontSize: 13,
    color: '#888888',
    paddingLeft: 15,
    paddingRight: 15
  },

  txtInfo: {
    fontSize: 14,
    color: '#080808',
    paddingLeft: 15,
    paddingRight: 15,
  },

  txtInfoTitle: {
    fontSize: 13,
    marginTop: 20,
    color: '#888888',
    paddingLeft: 15,
    paddingRight: 15
  },
  titleTwo: {
    fontSize: 13,
    marginTop: 15,
    color: '#888888',
    paddingLeft: 15,
    paddingRight: 15
  },

  txtInfoBody: {
    fontSize: 13,
    color: '#888888',
    paddingLeft: 15,
    paddingRight: 15
  },
  containerHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingRight: 40, marginTop: 10 },
  containerBody: { flexDirection: 'row', justifyContent: 'space-between', paddingRight: 40, marginTop: 10 },

  ViewLeft: { width: 180 },
  ViewRight: { width: 150 },

  divisor: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  wrap: {
    width: WIDTH,
    height: 360
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotAct: {
    margin: 3,
    color: 'black',
    fontSize: 8
  },
  dot: {
    margin: 3,
    color: '#f3f3f3',
    fontSize: 8
  }
})


  const dateParsed = useMemo(
    () =>
      formatRelative(parseISO(dataPostagem), new Date(), {
        locale: ptBR,
        addSuffix: true,
      }),
    [dataPostagem],
  );

  const abreCtt = () => {
    Linking.openURL(`tel:${numeroAnuncio}`);
  }

  const [act, setAct] = useState(0);

  const onchange = (nativeEvent) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide != act) {
      setAct(slide)
    }
  }

  return (
    <SafeAreaView style={css.containerBG}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/*CARROSEL DE IMAGENS AINDA FALTA CONSERTAR O INDICADOR DE IMAGEM*/}
        <View style={css.wrap}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={css.wrap}
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          >
            {Images.map((e, index) =>
              <Image
                key={index}
                resizeMode={'contain'}
                style={css.wrap}
                source={{ uri: e }}
              />
            )}
          </ScrollView>
          <View style={css.wrapDot}>
            {Images.map((e, index) =>
              <Text
                key={index}
                style={act == index ? css.dot : css.dotAct}>
                ●
              </Text>
            )}
          </View>
        </View>

        {/*<SliderBox resizeMode="contain" style={css.img} images={Images} />*/}

        <Text style={css.Title}>{Veiculo}</Text>

        <Text style={css.cardSubTitle}>{Comment}</Text>
        <Text style={css.TitlePrice}>R$ {priceValue}</Text>

        <View style={css.containerHeader}>
          <View style={css.ViewLeft}>
            <Text style={css.txtInfoTitle}>Contato do vendedor</Text>
            <Text style={css.txtInfo}>{numeroAnuncio}</Text>
          </View>
          <View style={css.ViewRight}>
            <Text style={css.txtInfoTitle}>Anunciado</Text>
            <Text style={css.txtInfo}>{dateParsed}</Text>
          </View>
        </View>

        <View style={css.containerBody}>
          <View style={css.ViewLeft}>
            <Text style={css.txtInfoTitle}>Site anunciado</Text>
            <Text style={css.txtInfo}>{siteAnunciante}</Text>
          </View>
          <View style={css.ViewRight}>
            <Text style={css.txtInfoTitle}>Cidade</Text>
            <Text style={css.txtInfo}>{cidade}</Text>
          </View>
        </View>

        <View style={css.divisor} />
        <Text style={css.txtInfoBody}>Informações técnicas</Text>

        <View style={css.containerHeader}>
          <View style={css.ViewLeft}>
            <Text style={css.txtInfoBody}>Ano</Text>
            <Text style={css.txtInfo}>{anoFab}/{anoModel}</Text>
          </View>
          <View style={css.ViewRight}>
            <Text style={css.txtInfoBody}>Km</Text>
            <Text style={css.txtInfo}>{kmEdit}</Text>
          </View>
        </View>

        <View style={css.containerBody}>
          <View style={css.ViewLeft}>
            <Text style={css.txtInfoBody}>Cor</Text>
            <Text style={css.txtInfo}>{cor}</Text>
          </View>

          <View style={css.ViewRight}>
            <Text style={css.txtInfoBody}>Tipo</Text>
            <Text style={css.txtInfo}>{tipo}</Text>

          </View>
        </View>

        <View style={css.containerBody}>
          <View style={css.ViewLeft}>
            <Text style={css.txtInfoBody}>Portas</Text>
            <Text style={css.txtInfo}>{portas}</Text>
          </View>
          <View style={css.ViewRight}>
            <Text style={css.txtInfoBody}>Câmbio</Text>
            <Text style={css.txtInfo}>{transmission}</Text>
          </View>
        </View>

        <View style={css.divisor} />
        <Text style={css.txtInfoBody}>Comentário geral</Text>
        <View style={css.containerHeader}>
          <View>
            <Text style={css.txtInfo}>{LongComent}</Text>
          </View>
        </View>

        <View style={css.divisor} />
        <Text style={css.txtInfoBody}>Opcionais</Text>

        <View style={css.containerHeader}>
          <FlatList
            style={{ marginBottom: 10 }}
            data={vidro}
            renderItem={({ item }) =>
              <View>
                <Text style={css.txtInfo}>{item}</Text>
              </View>}
          />
        </View>
      </ScrollView>
      <View style={{ marginBottom: 10, padding: 10 }}>

        <Botao
          txtBotao={"Falar com vendedor"}
          corBotao={corAmarelaAppBar}
          corTxt={corBlack}
          acao={abreCtt}
        />
      </View>

    </SafeAreaView>
  );
}