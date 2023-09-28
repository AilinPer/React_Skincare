import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useSelector } from "react-redux"
import { colors } from '../theme/colors'
import CategoryItem from '../components/CategoryItem'

const Home = ({navigation}) => {

const categories = useSelector( state => state.homeSlice.allCategories )


    return (
        <SafeAreaView>
        <Header title="Categorias" navigation={navigation}/>
        <View>
            <FlatList style={styles.Lista}
                data={categories}
                keyExtractor={(key) => key}
                renderItem={({ item }) => <CategoryItem navigation={navigation} item={item}/>}
            />
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Lista:{
        backgroundColor:colors.verdeclaro,
        width:"100%",
        padding:10,
    }
});
export default Home