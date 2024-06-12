import {View, Text} from 'react-native'
import estilo from './style'

export default function Header(){
    return(
        <>
            <Text style={estilo.titulo}>HK TEAMS</Text>
             <View style={{width:'95', flexDirection: 'row', marginTop: 20, alignItems:'center', justifyContent:"space-between" }}>
            
            </View>

        </>
    )
}