/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react'
import {
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Image,
	Text,
} from 'react-native'
// import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { UserContext } from '../contexts/UserContext/UserContext'
import { api } from '../api'
// import UserServicies from '../services/UserServicies'

const LogIn = ({ navigation }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function onClick() {
		navigation.navigate('Home')
	}

	const { loginUsuario } = useContext(UserContext)
	const LogInUser = async () => {
		try {
			loginUsuario(email, password)
			navigation.navigate('Home')
		} catch (error) {
			console.log(error.message)
		}
	}

	// let userStorage = ''
	// useEffect(() => {
	// 	const getDataStorage = async () => {
	// 		await AsyncStorage.getItem('usuario')
	// 	}
	// 	userStorage = getDataStorage()
	// }, [])

	// if (userStorage) {
	// 	navigation.navigate('Home')
	// }

	return (
		<>
			<View style={{ flex: 1, backgroundColor: '#6ED4C8', top: 40 }}>
				{/* <Image
					style={styles.img}
					source={require('../assets/logo.png')}
				></Image> */}

				<View style={styles.Texto}>
					<TextInput
						style={styles.input}
						placeholder="Correo electronico"
						keyboardType="default"
						onChangeText={(text) => setEmail(text)}
					/>
				</View>

				<View style={styles.Texto}>
					<TextInput
						style={styles.input}
						placeholder="Contraseña"
						keyboardType="default"
						secureTextEntry={true}
						onChangeText={(text) => setPassword(text)}
					/>
				</View>

				<TouchableOpacity style={styles.Enviar} onPress={LogInUser}>
					<Text>Sign In</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.Enviar} onPress={onClick}>
					<Text>¿Aun no te registraste?</Text>
				</TouchableOpacity>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	Texto: {
		color: '#000',
		fontSize: 12,
		fontWeight: 'bold',
		paddingHorizontal: 2,
	},

	img: {
		margin: 1,
		width: '70%',
		aspectRatio: 1,
	},
	input: {
		backgroundColor: '#fff',
		height: 40,
		margin: 2,
		borderWidth: 1,
		padding: 8,
		color: '#000',
		borderRadius: 30,
	},
	Enviar: {
		margin: 2,
		color: '#000',
		// border: "5px solid black",
		textAlign: 'auto',
		backgroundColor: '#5F8CE1',
		marginLeft: 'auto',
		marginRight: 'auto',
		height: 40,

		borderColor: '#FFE919',
		borderRadius: 30,
		padding: 10,
	},
})

export default LogIn
