import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import Header from '../components/Header'

const Map = ({ route, navigation }) => {
    const { location } = route.params
    console.log(location)

    return (
        <View style={styles.contenedor}>
            <Header navigation={navigation} title="Mapa" />
            <MapView style={styles.mapa}
                pointerEvents={true}
                showsUserLocation={true}
                region={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
    mapa:{
        width: "100%",
        height: "100%"
    }
})

export default Map