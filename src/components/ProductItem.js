import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const ProductItem = ({item, navigation}) => {
    return (
        <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("detalle", { item })} >
            <Text numberOfLines={0.5} ellipsizeMode="tail" style={styles.titulos}> {item.titulo} </Text>
        </Pressable>
            <Image style={styles.imagen} source={{uri:item.imagen[0]}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        marginVertical: 18,
        borderColor: colors.verdeclaro,
        borderRadius: 10,
        borderWidth: 2,
        height: 100,
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
        
    },
    titulos:{
        fontSize: 15,
        fontWeight:300,
        marginLeft:25,
        textAlign:"left",
        //flexWrap:"wrap",
        maxWidth:"50%",
        textAlign:"center"
    },
    imagen:{
        marginRight:10,
        resizeMode:"cover",
        width:80,
        height:80
        
    },
    
})

export default ProductItem