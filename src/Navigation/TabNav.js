import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import RootNavigation from './RootNavigation'
import Profile from '../screens/Profile';
import Shope from '../screens/Shope';
import { colors } from '../theme/colors';


const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator screenOptions={{title:"", headerShown:false}}>
            <Tab.Screen 
            options={{ tabBarIcon: ({ focused }) => (<MaterialCommunityIcons name="shopping-search" size={30} color={focused ? colors.turquesa : "black"} />)}}
            name= "rootNavigation" component={RootNavigation}/>
            <Tab.Screen
            options={{ tabBarIcon: ({ focused }) => (<FontAwesome name="user" size={30} color={focused ? colors.turquesa : "black"} />)}}
            name= "Perfil" component={Profile}/>
            <Tab.Screen
            options={{ tabBarIcon: ({ focused }) => (<AntDesign name="shoppingcart" size={30} color={focused ? colors.turquesa : "black"} />)}}
            name= "Tienda" component={Shope}/>
        </Tab.Navigator>
    )
}

export default TabNav