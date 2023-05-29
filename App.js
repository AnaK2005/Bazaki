import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// para permitir a navegação
import { NavigationContainer } from '@react-navigation/native';

//navegação em Stack

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//navegação por tab

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator(); 


//importando arquivos
import VerMais from './componentes/telas/vermais';
import Login from './componentes/telas/login';
import Home from './componentes/telas/home'; 
import Inicial from './componentes/telas/inicial';

//css
import { Ionicons } from '@expo/vector-icons'; 



function Tabs(){
  return(
    <Tab.Navigator tabBarOptions={{activeTintColor: '#000'}}>
      <Tab.Screen name="Home" options={{
        headerShown: false, 
        tabBarIcon: ({color, size }) => (<Ionicons name="home-outline" size={30} color={color='black'} />),
        tabBarLabel: 'Home',
        tabBarActiveTintColor: "#000",
        tabBarStyle: [
          {
            "display": "flex"
          },
        ],
          
        }} 
        component={Home}/>

      <Tab.Screen name="Login" options={{
        headerShown: false,
        tabBarIcon: ({color, size }) => (<Ionicons name="ios-person-sharp" size={30} color="black" />),
        tabBarLabel: 'Login',
        tabBarActiveTintColor: "#000",
        tabBarStyle: [
          {
            "display": "flex"
          },
        ],
        }} component={Login} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicial"options={{ headerShown: false }} component={Inicial}></Stack.Screen>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Tabs}></Stack.Screen>
        <Stack.Screen name="VerMais"component={VerMais}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
