import React from 'react';
import { StatusBar, SafeAreaView, View, Text } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/Cesta';

import mock from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  // Utilizamos o ...mock para descontruir o objeto, é a mesma coisa que fazer topo={ mock.topo } detalhes={ mock.detalhes } fica mais simples
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />      
      <Cesta { ...mock } />
    </SafeAreaView>
  );
}
