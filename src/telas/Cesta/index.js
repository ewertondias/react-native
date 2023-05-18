import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto';

export default function Cesta({ topo, detalhes, itens }) {
    // <> fragmento para agrupar componentes sem necessidade de criar view
    // <ScrollView> para poder rolar a tela

    return <> 
        <FlatList 
            data={ itens.lista }
            renderItem={ Item }
            keyExtractor={({ nome }) => nome} // Id unico
            ListHeaderComponent={() => { // O que terá no header (antes) da lista, se fosse depois seria ListFooterComponent
                return <>
                    <Topo { ...topo }/>

                    <View style={ estilos.cesta }>
                        <Detalhes { ...detalhes } />
                        <Texto style={ estilos.titulo }>{ itens.titulo }</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        marginTop: 32,
        marginBottom: 8,
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 32
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});