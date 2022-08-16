import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonsFilter from '../components/ButtonsFilter';
import Button from '../components/Button';
import { fetchAnuncios } from "../store/reducers/anuncios";
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "react-native-select-dropdown";
import CardHeaderButtonBack from "../components/CardHeaderButtonBack";
import Carregamento from "../components/Carregamento";
import ModalSelect from "../components/ModalSelect";
import Botao from "../components/Botao";
import { corAmarelaPadrao, corBlack } from "../core/cores";
import ModalSelectPrice from "../components/ModalSelectPrice";
import { useLayoutEffect } from "react";

const css = StyleSheet.create({

    header: {
        height: 90, backgroundColor: 'white', paddingTop: 20,
        elevation: 5, flexDirection: 'row', paddingLeft: 15,
        paddingRight: 20, alignItems: 'center'
    },

    botao: { flexDirection: 'row', alignItems: 'center', height: 50 },

    txtTitle: { fontSize: 17, fontWeight: '600', paddingLeft: 20 },

    txtBotao: { fontSize: 18, color: 'white', fontWeight: 'bold' },

    body: { padding: 10, backgroundColor: 'white' },

    txtFiltros: { fontSize: 15, marginLeft: 10 },

    footer: { padding: 15, marginTop: 10 },

    dropdownStyle: {
        backgroundColor: 'white',
        width: '95%',
        marginRight: 10
    },

    dropdown2BtnStyle: {
        backgroundColor: 'white',
        width: '100%'
    },

    buttonSend: {
        width: 200,
        marginLeft: 80,
        marginTop: 5,
        color: 'white'
    },

    containerModal: {
        marginLeft: 25, marginTop: '40%',
        width: '90%', backgroundColor: 'white', elevation: 30
    },

    botaoFlatlist: { height: 60, justifyContent: 'center', paddingLeft: 20 },

    containerBotao: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end', paddingRight: 10
    },

    botaoLimparFiltro: {
        width: 120, marginTop: 10,
        backgroundColor: 'white', marginBottom: 10, height: 40,
        alignItems: 'center', justifyContent: 'center', borderRadius: 30
    },

    botaoFilter: {
        width: "100%", height: 60, alignItems: 'center',
        justifyContent: 'center', backgroundColor: 'red', borderRadius: 30, elevation: 5
    }

});

export default function FilterScreen({ navigation, route }) {

    const [loading, setLoading] = useState(false);
    const anunciosData = useSelector((state) => state.anuncios);
    const dispatch = useDispatch();

    //const com itens selecionados no modal
    const [siteSelected, setSiteSelected] = useState(null);
    const [marcaSelected, setMarcaSelected] = useState(null);
    const [priceSelected, setPriceSelected] = useState(null);
    const [anoSelected, setAnoSelected] = useState(null);
    const [cidadeSelected, setCidadeSelected] = useState(null);
    const [transSelected, setTransSelected] = useState(null);
    const [precoMin, setPrecoMin] = useState(null);
    const [precoMax, setPrecoMax] = useState(null);
    const [ano_min, setAno_min] = useState(null);
    const [ano_max, setAno_max] = useState(null);

    //const onde recebemos os itens
    const [site, setSites] = useState(null);
    const [cidades, setCidades] = useState(null);
    const [marcas, setMarcas] = useState(null);
    const [transmissao, setTransmissao] = useState(null);
    const [anos, setAnos] = useState(null);
    const [dataFilter, setDataFilter] = useState(null);

    //const modal
    const [modalSites, setModalSites] = useState(false);
    const [modalMarca, setModalMarca] = useState(false);
    const [modalPrice, setModalPrice] = useState(false);
    const [modalCidade, setModalCidade] = useState(false);
    const [modalTransmissao, setModalTransmissao] = useState(false);
    const [modalAno, setModalAno] = useState(false);

    var filtros = {
        advertiser: siteSelected,
        seller_city: cidadeSelected,
        transmission: transSelected,
        make: marcaSelected
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

    const { token } = route.params;

    useEffect(() => {
        setLoading(true);
        dispatch(fetchAnuncios({
            filtro: siteSelected != null || transSelected != null || cidadeSelected != null || marcaSelected != null ? filtros : filtrosNullos, access_token: token
        }));
    }, [siteSelected, transSelected, cidadeSelected, marcaSelected])

    useEffect(() => {
        if (anunciosData.sucess) {
            setDataFilter(anunciosData.data.Filters);
            setLoading(false);
        }
    }, [anunciosData]);

    useEffect(() => {

        if (dataFilter != null) {
            const { seller_city, advertiser, make, transmission, year_model } = dataFilter;
            setSites(advertiser);
            setCidades(seller_city);
            setMarcas(make);
            setTransmissao(transmission);
            setAnos(year_model);
        }

    }, [dataFilter]);

    let parametrosFilter = {
        siteSelected,
        marcaSelected,
        cidadeSelected,
        transSelected,
        precoMin,
        precoMax,
        ano_min,
        ano_max
    }

    const proxTela = () => {
        navigation.navigate("HomeScreen", parametrosFilter);
    }

    const limparTodosFiltros = () => {
        setSiteSelected(null);
        setMarcaSelected(null);
        setPriceSelected(null);
        setAnoSelected(null);
        setTransSelected(null);
        setCidadeSelected(null);
        setAno_min(null);
        setAno_max(null);
        setPrecoMax(null);
        setPrecoMin(null);
    }


    const EscolheSiteAnunciante = () => {
        setModalSites(true);
    }

    const EscolheCidade = () => {
        setModalCidade(true);
    }
    const EscolheMarca = () => {
        setModalMarca(true);
    }

    const EscolhePrice = () => {
        setModalPrice(true);
    }

    const EscolheTransmissao = () => {
        setModalTransmissao(true);
    }

    const EscolheAno = () => {
        setModalAno(true);
    }

    const fecharModais = () => {
        setModalSites(false);
        setModalCidade(false);
        setModalMarca(false);
        setModalPrice(false);
        setModalTransmissao(false);
        setModalAno(false);
    }

    const fechaModalSite = (item) => {
        let listasites = [];
        if (siteSelected == null) {
            listasites.push(item.ref);
            setSiteSelected(listasites);
        } else {
            listasites.push(
                ...siteSelected,
                item.ref
            )
            setSiteSelected(listasites);
        }
        setModalSites(false);
    }

    const fechaModalCidade = (item) => {
        let listaCidade = [];
        if (cidadeSelected == null) {
            listaCidade.push(item.ref);
            setCidadeSelected(listaCidade);
        } else {
            listaCidade.push(
                ...cidadeSelected,
                item.ref
            )
            setCidadeSelected(listaCidade);
        }
        setModalCidade(false);
    }

    const fechaModalMarcas = (item) => {
        let lista = [];
        if (marcaSelected == null) {
            lista.push(item.ref);
            setMarcaSelected(lista);
        } else {
            lista.push(
                ...marcaSelected,
                item.ref
            )
            setMarcaSelected(lista);
        }
        setModalMarca(false);
    }

    const fechaModalPrice = () => {
        setModalPrice(false);
    }

    const fechaModalTransmissao = (item) => {
        let lista = [];
        if (transSelected == null) {
            lista.push(item.ref);
            setTransSelected(lista);
        } else {
            lista.push(
                ...transSelected,
                item.ref
            )
            setTransSelected(lista);
        }

        setModalTransmissao(false);
    }


    const fechaModalAno = (item) => {
        let lista = [];
        if (ano_min == null) {
            lista.push(item.ref);
            // setAnoSelected(lista);
            setAno_min(lista);
        } else {
            lista.push(
                ...ano_min,
                item.ref
            )
            // setAnoSelected(lista);
            setAno_max(lista[1]);
        }
        setModalAno(false);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <ModalSelect
                    reference={'Escolha o site'}
                    fecharNoItem={fecharModais}
                    data={site}
                    close={fechaModalSite}
                    isVisible={modalSites} />

                <ModalSelect
                    reference={'Escolha a cidade'}
                    fecharNoItem={fecharModais}
                    data={cidades}
                    isVisible={modalCidade}
                    close={fechaModalCidade}
                />

                <ModalSelect
                    reference={'Escolha a marca'}
                    fecharNoItem={fecharModais}
                    data={marcas}
                    close={fechaModalMarcas}
                    isVisible={modalMarca}
                />

                <ModalSelectPrice
                    valorMin={precoMin}
                    setValorMin={setPrecoMin}
                    valorMax={precoMax}
                    setValorMax={setPrecoMax}
                    close={fechaModalPrice}
                    isVisible={modalPrice}
                    reference={"Digite os valores"}
                />

                <ModalSelect
                    reference={'Escolha a transmissão'}
                    fecharNoItem={fecharModais}
                    data={transmissao}
                    isVisible={modalTransmissao}
                    close={fechaModalTransmissao}
                />

                <ModalSelect
                    reference={'Escolha o ano'}
                    fecharNoItem={fecharModais}
                    data={anos}
                    isVisible={modalAno}
                    close={fechaModalAno}
                />

                {anunciosData.loading ?
                    <Carregamento
                        cor={'black'}
                        obj={"Carregando filtros"} /> :

                    <View>


                        <View style={css.containerBotao}>
                            <TouchableOpacity style={css.botaoLimparFiltro} onPress={() => limparTodosFiltros()}>
                                <Text>Limpar filtros</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={css.body}>


                            <ButtonsFilter
                                tipoFilter={'Site anunciante'}
                                iconFilter={"megaphone-outline"}
                                param={siteSelected}
                                escolheCategoriaFiltro={EscolheSiteAnunciante}
                            />


                            <ButtonsFilter
                                tipoFilter={'Transmissão'}
                                iconFilter={"git-network-outline"}
                                escolheCategoriaFiltro={EscolheTransmissao}
                                param={transSelected}

                            />


                            <ButtonsFilter
                                tipoFilter={'Cidade'}
                                iconFilter={"location-outline"}
                                escolheCategoriaFiltro={EscolheCidade}
                                param={cidadeSelected}
                            />


                            <ButtonsFilter
                                tipoFilter={'Marca'}
                                iconFilter={"car-outline"}
                                escolheCategoriaFiltro={EscolheMarca}
                                param={marcaSelected}

                            />


                            <ButtonsFilter
                                tipoFilter={'Preço'}
                                iconFilter={"cash-outline"}
                                escolheCategoriaFiltro={EscolhePrice}
                                precoMin={precoMin}
                                precoMax={precoMax}

                            />






                            <ButtonsFilter
                                tipoFilter={'Ano'}
                                iconFilter={"calendar-outline"}
                                escolheCategoriaFiltro={EscolheAno}
                                dataMax={ano_max}
                                dataMin={ano_min}
                            />





                        </View>


                        <View style={css.footer}>
                            <Botao
                                corBotao={corAmarelaPadrao}
                                txtBotao={"Filtrar anúncios"}
                                corTxt={corBlack}
                                acao={proxTela}
                            />
                        </View>


                    </View>
                }

            </ScrollView>
        </SafeAreaView>
    );
}