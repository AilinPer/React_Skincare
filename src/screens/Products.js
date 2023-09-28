import { FlatList, StyleSheet,  SafeAreaView, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import ProductItem from '../components/ProductItem'
import { colors } from '../theme/colors'
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux"

const Products = ({navigation, route}) => {

    const [categoriaProd, setCategoriaProd] = useState([])
    const [text, setText] = useState("")
    const { item } = route.params 

    const products = useSelector( state => state.homeSlice.allProducts )
    //console.log(JSON.stringify(products, null, " "))


    useEffect(() => {
        const categoriaProducto = products.filter((el) => el.categoria === item)
        setCategoriaProd(categoriaProducto)
        
        if(text){
        const tituloProducto = products.filter(
            (el) => el.titulo.toLowerCase() === text.toLowerCase()
        )
        setCategoriaProd(tituloProducto) 

        }
    }, [text, item])
    return (
        <SafeAreaView style={styles.container}>
            <Header title={item} navigation={navigation}/> 
            <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="caretleft" size={24} color={colors.verdemedio} />
            </Pressable>
            <Search text={text} setText={setText}/>
            <FlatList style={styles.lista}
                data={categoriaProd}
                keyExtractor={products.id}
                renderItem={({ item }) => (
                    <ProductItem navigation={navigation} item={item}/>
                )}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.verdemedio,
    },
    
})
export default Products