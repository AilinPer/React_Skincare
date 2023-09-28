import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useSelector } from "react-redux"

const Home = ({navigation}) => {

const categories = useSelector( state => state.homeSlice.allCategories )


    return (
        <SafeAreaView>
        <Header title="Categorias" navigation={navigation}/>
        <Categories navigation={navigation}/>
        </SafeAreaView>
    )
}

export default Home