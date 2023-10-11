import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Registrer from '../screens/Registrer'

const Stack = createNativeStackNavigator()

const AuthNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={Login}/>
      <Stack.Screen name='registrer' component={Registrer}/>
    </Stack.Navigator>
  )
}

export default AuthNav