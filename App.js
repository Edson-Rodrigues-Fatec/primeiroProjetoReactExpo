import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import logo from './assets/shopperWoman.jpg'


function App(){
return(
  <View>
    <Text style={styles.titulo}><FontAwesome name="user-circle" size={50} />Bom dia Vietnã!</Text>
    <FontAwesome.Button name="shopping-cart" style={styles.botao} >Comprar</FontAwesome.Button> 
    <Image source={logo} style={styles.imagem} />
  </View>
)
}
const styles = StyleSheet.create({
  imagem: {
    width: '90%',
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