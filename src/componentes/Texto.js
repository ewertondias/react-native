import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children, style }) {
    let estilo = estilos.texto; // Cria variavel definindo o estilo padrao sendo o texto

    if (style?.fontWeight === 'bold') { // Usa o ? para evitar nullpointer, caso não seja passado o style não faz a verificacao se é bold
        estilo = estilos.textoNegrito;
    }

    return <Text style={[ style, estilo ]}>{ children }</Text> // Passa o style recebido como parametro do componente e a variavel estilo
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
});