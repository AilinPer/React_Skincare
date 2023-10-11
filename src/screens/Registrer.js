import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme/colors'
import { firebase } from '../Firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Registrer = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [passwordError, setpasswordError] = useState(null)
    const [emailError, setemailError] = useState(null)

    const handleRegister = async () => {
        //console.log("Registro")
        try {
            const response = await createUserWithEmailAndPassword(
                firebase,
                email, 
                password
            )
            //console.log(response)
            navigation.navigate("login")

        } catch (e) {
            console.log("Error en el registro", e)
            if (email.length === 0) {
                setemailError("Este campo es obligatorio")
            } else if (!isValidEmail(email)) {
                setemailError("Email invalido")
            } else {
                setemailError(null)
            }
        function isValidEmail(email){
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
        }
            if(password.length === 0) {
                setpasswordError("Este campo es obligatorio")
            } else if (password.length <= 6) {
                setpasswordError("La contraseña debe ser mayor a 6 caracteres")
            }
        }
    }

    return (
        <View style={styles.contenedor}>
        <Text style={styles.titulo}>Registro</Text>
        <TextInput
            placeholder="Email"
            style={styles.cont_texto}
            value={email}
            onChangeText={(text) => {
                setEmail(text)
                setemailError("")
            }}
        />
        {emailError && (
            <Text>{emailError}</Text>
        )}
        <TextInput
            placeholder="Contraseña"
            secureTextEntry
            style={styles.cont_texto}
            value={password}
            onChangeText={(text) => {
                setPassword(text)
                setpasswordError("")
            }}
        />
        {passwordError && (
            <Text>{passwordError}</Text>
        )}

        <TouchableOpacity style={styles.boton} onPress={() => handleRegister()}>
            <Text style={styles.botonTexto}>Registrarse</Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate("login")}>
            <Text style={styles.registroTexto}>
            Ya tienes cuenta? Iniciar Sesión
            </Text>
        </Pressable>
        </View>
    )
}

export default Registrer

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: colors.verdeclaro,
    },
    titulo: {
        fontSize:30,
        fontWeight:"bold",
        color:colors.verdeoscuro,
    },
    cont_texto: {
        width: "70%",
        borderColor:colors.verdemedio,
        borderWidth:2,
        fontSize:20,
        textAlign:"center",
        marginTop:"3.5%"
    },
    boton: {
        backgroundColor: colors.verdemedio,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop:"3.5%"
    },
    botonTexto: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        
    },
    registroTexto: {
        marginTop: "3.5%",
        fontSize: 18,
        color: colors.turquesa,
        fontWeight: "bold"
    },
})