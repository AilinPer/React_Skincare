import { View, Text, Image, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { products } from '../data/products'
import Header from '../components/Header'
import { colors } from '../theme/colors'
import { AntDesign } from "@expo/vector-icons";

const ItemDetail = ({navigation, route}) => {
    //console.log(products[4])
    const initialProd = products[1]
    const { item } = route.params

    console.log(item)

    return (
        <SafeAreaView style={styles.contenedorimg}>
            <Header title="Detalles" navigation={navigation}/>
            <Pressable
            style={{ marginLeft: 15, marginBottom: 10 }}
            onPress={() => navigation.goBack()}>
                <AntDesign name="caretleft" size={24} color={colors.verdemedio} />
            </Pressable>
            <Text style={styles.tituloprod}>{initialProd.titulo}</Text>
            <Image style={styles.imagen} 
            source={{uri:item.imagen[0]}}/>
            <Text style={styles.descripcion}>{initialProd.descripcion}</Text>
            <Text style={styles.descripcion}>${initialProd.precio}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imagen:{
        height:250,
        width:250,
        resizeMode:"center",
    },
    contenedorimg:{
        alignItems:"center",
        backgroundColor:colors.verdeclaro,
    },
    tituloprod:{
        fontSize:25,
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        textAlign:"center"
    },
    descripcion:{
        fontSize:18,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        textAlign:"justify",

    }
})

export default ItemDetail