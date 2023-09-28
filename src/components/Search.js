import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const Search = ({text, setText}) => {
    const clearText = () => {
        setText(null)
    }
    return (
        <View style={styles.contenedor}>
            <TextInput 
            onChangeText={(value) => setText(value)}
            value={text}
            style={styles.input} 
            placeholder='Busca un producto aquí'/>
            <Pressable onPress={() => clearText()}>
                <AntDesign name="close" size={30} color="black" />
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        marginVertical:15,
    },
    input:{
        width:"80%",
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        marginRight: 15,
    }
})

export default Search