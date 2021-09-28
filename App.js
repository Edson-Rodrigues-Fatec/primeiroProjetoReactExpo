import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import logo from './assets/shopperWoman.jpg'


function App(){
return(
  <View>
    <Text style={styles.titulo} > Sejam todos benvindos à nossa loja.</Text>

    <Image source={logo} style={styles.imagem} />
   
    <FontAwesome.Button name="shopping-cart" style={styles.botao} >Adicionar ao carrinho</FontAwesome.Button> 
    
     

     <Text style={styles.titulo}><FontAwesome name="heart" size={50} color="pink" />Desejamos boas compras . Divirtam-se!!!!!</Text>
  </View>
)
}
const styles = StyleSheet.create({
  imagem: {
    width: '75%',
    height: 300,
    resizeMode: 'center'
  }, botao: {
    width: 150,
    height: 30
  }, titulo: {
    fontSize: 30,
    color: "#1A237E"
  }
})
export default App