/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import {
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Image,
	Text,
} from 'react-native'
import { UserContext } from '../contexts/UserContext/UserContext'
import { api } from '../api'
// import UserServicies from '../services/UserServicies'

const LogIn = ({ navigation }) => {
	// const { SetUser } = useContext(UserContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function onClick() {
		navigation.navigate('Home')
	}

	const { loginUsuario } = useContext(UserContext)
	const LogInUser = async () => {
		try {
			loginUsuario(email, password)
			// const islogged = await UserServicies.login("Uri", "1234")
			// if (islogged) {
			// 	SetUser(true)
			// }

			// const data = {
			// 	Email: email,
			// 	Password: password,
			// }

			// const result = await api.post('Usuario/login', data)

			navigation.navigate('Home')

			// console.log(result.data)
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<>
			<View style={{ flex: 1, backgroundColor: '#6ED4C8' }}>
				<Image
					style={styles.img}
					source={require('../assets/logo.png')}
				></Image>

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
