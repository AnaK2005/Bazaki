import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'; 

//css
import estilos from '../css/estilo';
import {useFonts} from 'expo-font';

export default function Login({ navigation }){
  return(
  <View style = {{marginTop: 50}}>
      <Image source={require('../imagens/fotopglogin.jpg')} style = {estilos.fotoPgLogin}/>


      <View style = {estilos.contBtnsLogin1}>
          <View style = {estilos.btnOpcoes}>
            <Text style = {estilos.textoBtnOpcoes}>Opções</Text>
          </View>
        <View style = {estilos.btnExcluir}>
          <Text style = {estilos.textoBtnExcluir}>Excluir conta</Text>
        </View>    
      </View>


      <View style = {estilos.contBtnsLogin2}>
        <View style = {estilos.btnCont2}>
          <Text style = {estilos.textoBtnCon2}>Filtros de preferência</Text>
        </View>
        <View style = {estilos.btnCont2}>
          <Text style = {estilos.textoBtnCon2}>Produtos favoritos</Text>
        </View>
        <View style = {estilos.btnCont2}>
          <Text style = {estilos.textoBtnCon2}>Vendedores salvos</Text>
        </View>     
      </View>

      
    </View>
  )
}