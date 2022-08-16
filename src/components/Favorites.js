import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Image, StyleSheet, ToastAndroid } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as actions from '../store/actions/listActions';





const mapDispatchToProps = (dispatch) => {
  return {
    addItemInLista: (anuncio) => {
      dispatch(actions.addLista({ qndt: 1, anuncio }));
    }
  }
}




function Heart(props) {

  const [toogle, setToogle] = useState(true);
  const [cor, setCor] = useState('white');


  useEffect(() => {
    setCor((state) => toogle ? 'white' : 'red');
  }, [toogle]);


  const css = StyleSheet.create({
    botao: {
      position: 'absolute',
      top: 2,
      right: 5,
      elevation: 10,
      shadowColor: "#000",
      shadowRadius: 5
    },

    icons: {
      height: 30,
      color: cor,
    }


  });



  const favoritar = () => {
 
    props.addItemInLista(props.data);
    setToogle(state => !state); 
    ToastAndroid.showWithGravity(
      `${props.data.model} foi adicionado com sucesso a sua lista de favoritos!`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  }






  return (
    <TouchableOpacity style={css.botao} onPress={favoritar}>

      <Ionicons style={css.icons} name="heart" size={25} />

    </TouchableOpacity>
  )
}



export default connect(null, mapDispatchToProps)(Heart);