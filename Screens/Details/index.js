import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Details() {

  const route =useRoute();

  return (
    <View style={estilo.container}>
    
      <View style={estilo.cardTarefa}>
        <Text style={estilo.tituloCard}>{route.params.titulo}</Text>  
        <Image style={estilo.imagemCard} source={route.params.imagem}/>
        <Text style={estilo.desc}>{route.params.porcentagem}</Text> 
        <Text style={estilo.preco}>{route.params.descricao}</Text>   
      </View>

    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00008b',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  },
  preco: {
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#FFF',
  },cardTarefa: {
        marginTop: 20,
        backgroundColor: '#000',
        width: '90%',
        height: 300,
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
      },  
      desc: {
        fontSize: 30,
        marginTop: 5,
        color:'#fff',
      },
      imagemCard: {
        width: 150,
        height: 180,
        borderRadius:10,
      },
      tituloCard: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#fff',
      },

});