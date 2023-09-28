import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import {categories}  from '../data/categories.js'
import CategoryItem from './CategoryItem.js'
import { colors } from '../theme/colors.js'

const Categories = ({navigation}) => {
    return (
        <View>
            <FlatList style={styles.Lista}
                data={categories}
                keyExtractor={(key) => key}
                renderItem={({ item }) => <CategoryItem navigation={navigation} item={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Lista:{
        backgroundColor:colors.verdeclaro,
        width:"100%",
        padding:10,
    }
});

export default Categories