import React, {useStates} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } 
from 'react-native';
import Cep from'./components/Cep';
import Api from'./components/Cep';

export default function App() {
	const [cep, setCep] = useState(0);
	const [InputCep, setInputCep] = useStates(0);
	
	async function carregaCep(){
		const response = await Api.get('ws/'+cep+'/json/');
		setCep(response);
	}
  return (
    <View style={styles.container}>
		  <View style={styles.bloco}>
	  <Text style={styles.texto}>
  Informe seu Cep:
	</Text>
	<TextInput
		 
		style={styles.input}
		placeholder="Digite seu cep ..." 
	    onChangeText={(data)=>setCep(data)}
				  />
			  
	<TouchableOpacity style={styles.botao}
		onPress = {carregaCep}>	
	<Text style={styles.textoBotao}>Buscar</Text>
 </TouchableOpacity>	  
			  
    </View>
  <Cep data={cep}/>
	</View>
	  			   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	tetxo:{
	fontsize:20
},
	
	bloco:{
		width:'100%'
	},
	
	input:{
		width:'80%',
		marginLeft:'10',
		borderWidth:1
	},	
	
	botao:{
       width:'80%',
		marginLeft:'10',
	},
	
	textoBotao:{
		fontsize:20,
		textAling:'center'
	}
	
});
