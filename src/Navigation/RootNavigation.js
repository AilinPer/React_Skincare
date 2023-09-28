import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ItemDetail from '../screens/ItemDetail'
import Home from '../screens/Home'
import Products from '../screens/Products'


const Stack = createNativeStackNavigator()

const RootNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='home' screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen component={Home} name="home"/>
            <Stack.Screen component={Products} name="productos"/>
            <Stack.Screen component={ItemDetail} name="detalle"/>
        </Stack.Navigator>
    )
}

export default RootNavigation