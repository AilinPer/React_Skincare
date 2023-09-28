import { View, Text, StyleSheet, Pressable } from "react-native"
import React from 'react'
import { colors } from "../theme/colors";

const Header = ({title, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.Titulo}> {title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:85,
        width:"100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.verdeoscuro,
    },
    Titulo: {
        fontSize:50,
        color:"white",
        fontWeight: "600",
        fontFamily:"Merriweather",
    }
});


export default Header