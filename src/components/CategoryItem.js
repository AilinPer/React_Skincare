import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {colors} from '../theme/colors.js'
import { setCategory } from '../redux/slice/homeSlice.js'
import { useDispatch } from 'react-redux'

const CategoryItem = ({item, navigation}) => {

    const dispatch = useDispatch()

    const onHandleItem = () =>{
        dispatch(setCategory(item))
        navigation.navigate("productos", {item:item})
    }

    return (
        <Pressable  onPress={() => onHandleItem()}>
        <Text style={styles.texto}>{item}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontSize:20,
        fontWeight:"300",
        padding:5,
        borderColor:colors.beige,
        borderWidth:3,
        borderRadius:7,
        margin:10,
        textAlign:"center"
    }
});

export default CategoryItem