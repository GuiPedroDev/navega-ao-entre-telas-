import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    cardTarefa: {
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
      textoCard: {
        fontSize: 10,
        marginTop: 5,
        color:'#fff',
      },
      imagemCard: {
        width: 150,
        height: 180,
        borderRadius:10,
      },
      tituloCard: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
      },

})

export default estilo;

