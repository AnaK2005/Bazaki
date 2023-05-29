import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'; 

//css
import estilos from '../css/estilo';
import {useFonts} from 'expo-font';



export default function Home({ navigation }){
  return(
    <View>



      
      <View style = {estilos.containercard}>
          <View style = {estilos.fotocard}>
            <Text>Foto</Text>
          </View>
          <View style = {estilos.legendacard}>
            <View style = {estilos.conttTextoLegCard}>
              <TouchableOpacity onPress={() => navigation.navigate('VerMais')}>
                <Text style = {estilos.textoLegCard}>Ver mais</Text> 
              </TouchableOpacity>          
            </View>
          </View>
        </View>
    </View>
  )
}