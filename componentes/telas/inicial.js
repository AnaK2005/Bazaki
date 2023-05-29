import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'; 

//css
import estilos from '../css/estilo';
import {useFonts} from 'expo-font';

export const fontes = {
  PoppinsRegular:require('../fontes/Poppins-Regular.ttf'),
  PoppinsSemiBold:require('../fontes/Poppins-SemiBold.ttf'),
  PoppinsThin:require('../fontes/Poppins-Thin.ttf')
};

export default function Inicial({ navigation }){
  
  const[executarFontes] = useFonts(fontes); 
  return executarFontes ?(
    <View style = {estilos.contInicial}>

      <View style = {estilos.imginicial}><Image source={require('../imagens/logonav.jpg')} /></View>

      <View style = {estilos.contBtnEntrar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style = {estilos.btnEntrar}>
            <Text style = {estilos.textobtnEntrar}>Entrar</Text>
          </View>
        </TouchableOpacity> 
      </View>

    </View>
  ):null; 
}