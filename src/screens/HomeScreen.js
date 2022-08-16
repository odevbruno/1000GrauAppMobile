// import React from 'react';
import BackgroundHome from '../components/BackgroundHome';
import Header from '../components/Header';
import Card from '../components/Card';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { fetchAnuncios } from '../store/reducers/anuncios';
import { useDispatch, useSelector } from 'react-redux';
import Carregamento from '../components/Carregamento';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardSearch from '../components/CardSearch';
import ItemsFiltrados from '../components/ItemsFiltrados';
import Botao from './../components/Botao';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function HomeScreen({ navigation, route }) {

  const [busca, setBusca] = useState(null);
  const [tokenUser, setToken] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataToFill, setDataToFill] = useState([]);

  const anunciosData = useSelector((state) => state.anuncios);
  const userToken = useSelector((state) => state.login);
  const dispatch = useDispatch()

  const [limpaFiltro, setLimpaFiltro] = useState(false);

  const [advertiser, setAdvertiser] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [ano, setAno] = useState(null);
  const [trans, setTrans] = useState(null);
  const [ano_min, setAno_min] = useState(null);
  const [ano_max, setAno_max] = useState(null);
  const [preco_minimo, setPreco_min] = useState(null);
  const [preco_maximo, setPreco_max] = useState(null);
  const [marca, setMarca] = useState(null);
  const [mostrarFiltragens, setMostrarFiltragens] = useState(true)



  var filtro = {
    advertiser: advertiser,
    seller_city: cidade,
    year_min: ano_min,
    year_max: ano_max,
    price_min: preco_minimo,
    price_max: preco_maximo,
    transmission: trans,
    make: marca,
    model: busca == "" ? null : busca,
  }

  var filtrosNullos = {
    advertiser: null,
    seller_city: null,
    year_min: null,
    year_max: null,
    price_min: null,
    price_max: null,
    transmission: null,
    make: null,
    model: null,
  }

  useEffect(() => {
    setLimpaFiltro(false);

    if (route.params != undefined) {

      const { siteSelected, cidadeSelected, precoMin, precoMax, marcaSelected, transSelected, ano_max } = route.params;

      setMostrarFiltragens(true);
      setAdvertiser(siteSelected);
      setCidade(cidadeSelected);
      setPreco_min(precoMin);
      setPreco_max(precoMax);
      setMarca(marcaSelected);
      setTrans(transSelected);
      setAno_max(ano_max);

      if (route.params.ano_min != null) {
        for (let Pm of route.params.ano_min) {
          setAno_min(Pm);
        }
      }


    }


  }, [route.params]);


  useEffect(() => {

    async function requestToken() {
      try {
        const dataToken = await AsyncStorage.getItem('token');
        if (dataToken !== null) {

          console.log('pegou o token')
          const result = JSON.parse(dataToken);
          const { access_token } = result;
          setToken(access_token);
          setLoading(true);
          dispatch(fetchAnuncios({ filtro, access_token }));

        } else {
          console.log('nao pegou o token')
        }
      } catch (error) {

      }
    }
    requestToken();

  }, [advertiser, cidade, ano, busca, marca, ano_min, ano_max, preco_minimo, preco_maximo, trans]);

  useEffect(() => {
    if (anunciosData.sucess) {
      setData(anunciosData.data.Results);
      setDataToFill(anunciosData.data.Filters);
      setLoading(false);
    }
  }, [anunciosData]);





  const limpaSearch = () => {
    setBusca(null);
  }

  function navegaToFilter() {
    setMostrarFiltragens(false);
    navigation.navigate("FilterScreen", { token: tokenUser });
  }



  const renderItem = ({ item }) => {
    const backgroundColor = item.unique_id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.unique_id === selectedId ? 'white' : 'black';
    return (
      <Card
        key={item.unique_id}
        item={item}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };



  return (
    <>

      <SafeAreaView style={styles.containerBG}>
        <View style={styles.body}>



          <CardSearch
            valor={busca}
            change={setBusca}
            acao={limpaSearch} />

          <Header acao={navegaToFilter} />

          {mostrarFiltragens == true ?
            <View>
              {
                filtro.advertiser != null || filtro.seller_city != null || filtro.transmission != null || filtro.make != null ?
                  <ItemsFiltrados
                    advertiser={filtro.advertiser}
                    city={filtro.seller_city}
                    transmmissao={filtro.transmission}
                    marca={filtro.make}
                  />
                  : null
              }
            </View>
            : null}

          {isLoading || limpaFiltro ?
            <View>
              {limpaFiltro === true ?
                <Carregamento
                  corTxt={"black"}
                  cor={"black"}
                  obj={'Carregando todos os filtros'} /> :
                null
              }

              {isLoading == true ?
                <Carregamento
                  corTxt={"black"}
                  cor={"black"}
                  obj={'Carregando todos os anúncios'} />
                : null}
            </View>

            :
            <FlatList
              data={data}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              style={{ padding: 5 }}
              renderItem={renderItem}
              key={(item) => item.unique_id}
              keyExtractor={(item) => item.unique_id}
              extraData={selectedId}
            />
          }
           
        </View>
      </SafeAreaView>

    </>

  )
}





const styles = StyleSheet.create({
  header: {
    color: 'grey',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10
  },

  espacamento: { paddingBottom: 125 },

  bodyVazio: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  txtBodyVazio: {
    fontSize: 18,
    marginTop: 10

  },

  indicaFiltros: { height: 30, paddingLeft: 10, paddingRight: 10, marginLeft: 9, marginTop: 5, marginBottom: 5, marginRight: 9, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', backgroundColor: 'white' },

  button_logout: {
    position: 'absolute',
    width: 100,
    height: 40,
    right: 0,
  },

  cardcars: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  containerBG: { flex: 1 },

  body: {
    paddingTop: 10
  }
})