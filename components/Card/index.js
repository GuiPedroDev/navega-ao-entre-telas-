import{Text,View,Image,TouchableOpacity} from 'react-native'
import estilo from './style'
import { useNavigation } from '@react-navigation/native'

export default function Card({porcentagem,titulo,imagem,descricao}){

    const navigation = useNavigation();
    return(
        <TouchableOpacity
        onPress = {() => navigation.navigate('Details',{porcentagem:porcentagem,imagem:imagem,titulo:titulo,descricao:descricao})}>
             <View style={estilo.cardTarefa}>
            <Image style={estilo.imagemCard} source={{ uri: imagem }} />
                 <Text style={estilo.tituloCard}>{titulo}</Text>
        </View>
        </TouchableOpacity>
    )
}