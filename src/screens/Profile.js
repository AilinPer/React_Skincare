import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react'
import Header from '../components/Header'
import * as ImagePicker from "expo-image-picker"
import { useGetImageQuery, usePutImageMutation } from '../services/ecommerceApi';
import * as Location from "expo-location"

const Profile = () => {
    /*const [image, setImage] = useState(null)*/
    const [location, setLocation] = useState(null);
    const [putImage, result] = usePutImageMutation()
    const { data, refetch} = useGetImageQuery()

    const defaultImage =
        "https://cdn-icons-png.flaticon.com/256/3135/3135823.png"

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            base64: true,
        });
    
        if (!result.canceled) {
            await putImage({
                image: `data:image/jpeg;base64,${result.assets[0].base64}`,
            });

            refetch();
        }
    };

    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
            alert("No le has dado permiso a la Aplicación para acceder a tu cámara!");
            return;
            } else {
            const result = await ImagePicker.launchCameraAsync({
                base64: true,
            });
        
            console.log(result);
        
            if (!result.canceled) {
                await putImage({
                image: `data:image/jpeg;base64,${result.assets[0].base64}`,
                });
                refetch();
            }
            }
        };
        
    const getCoords = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
        console.log("Permiso fue denegado");
        return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    navigation.navigate("mapaLoc", { location });
    };

    console.log("COORDENADAS", location);

return (
    <View>
        <Header title= "Mi perfil"/>
        <View style={styles.contenedor}>
            <Image
            style={styles.imagen}
                source={{
                    uri: data ? data.image : defaultImage,
                }}
            />
        </View>
        <View style={styles.contenedorIconos}>
            <Pressable onPress={() => openCamera()} style={styles.botonicono}>
                <MaterialIcons style={styles.iconos} name="photo-camera" size={40} color="black" />
            </Pressable>
            <Pressable onPress={() => pickImage()} style={styles.botonicono}>
                <FontAwesome style={styles.iconos} name="photo" size={40} color="black" />
            </Pressable>
            <Pressable onPress={() => getCoords()} style={styles.botonicono}>
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