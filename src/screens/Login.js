import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme/colors'
import { firebase } from '../Firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setIdToken, setUser } from '../redux/slice/authSlice'

const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setpasswordError] = useState(null)
    const [emailError, setemailError] = useState(null)

    const handleLogin = async () => {
        try {
            const response = await signInWithEmailAndPassword(
                firebase,
                email,
                password
            )
                dispatch(setUser(response.user.email))
                dispatch(setIdToken(response._tokenResponse.idToken))
            console.log(response)
        } catch (e) {
            console.log("Error al iniciar sesión", e)
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
        <Text style= {styles.titulo}>Inicio de Sesión</Text>
        <TextInput style= {styles.cont_texto}
            placeholder="Nombre de usuario"
            value={email}
            onChangeText={(text) => {
                setEmail(text)
                setemailError(null)
            }}
        />
        {emailError && (
            <Text>{emailError}</Text>
        )}
        <TextInput style= {styles.cont_texto}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={(text) => {
                setPassword(text)
                setpasswordError(null)
            }}
        />
        {passwordError && (
            <Text>{passwordError}</Text>
        )}
        <TouchableOpacity style={styles.boton} onPress={handleLogin}>
            <Text style={styles.botonTexto}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate("registrer")}>
            <Text style={styles.registroTexto}>No tienes cuenta? Registrate</Text>
        </Pressable>
        </View>
    )
}

export default Login

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