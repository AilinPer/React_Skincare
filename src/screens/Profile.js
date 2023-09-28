import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React from 'react'
import Header from '../components/Header'

const Profile = () => {
  return (
    <View>
        <Header title= "Mi perfil"/>
        <View style={styles.contenedor}>
            <Image
            style={styles.imagen}
                source={{
                    uri: "https://cdn-icons-png.flaticon.com/256/3135/3135823.png"
                }}
            />
        </View>
        <View style={styles.contenedorIconos}>
            <Pressable onPress={() => console.log("Abrir la camara")} style={styles.botonicono}>
                <MaterialIcons style={styles.iconos} name="photo-camera" size={40} color="black" />
            </Pressable>
            <Pressable onPress={() => console.log("Abrir la galeria")} style={styles.botonicono}>
                <FontAwesome style={styles.iconos} name="photo" size={40} color="black" />
            </Pressable>
            <Pressable onPress={() => console.log("Abrir la ubicación")} style={styles.botonicono}>
                <Feather style={styles.iconos} name="map-pin" size={40} color="black" />
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imagen: {
        width:200,
        height: 200
    },
    contenedor: {
        alignItems:"center",
        marginTop:"3%",
    },
    contenedorIconos: {
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
    },
    botonicono:{
        margin:"5%",
        marginTop:"3%"
    },

})

export default Profile