import React, { useState } from 'react'
import { TextInput, Text } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import { Button } from 'react-native'
import axios from 'axios'

const Registrarse = ({ navigation }) => {
	const [nombre, setNombre] = useState('')
	const [apellido, setApellido] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [tipoUsuario, setTipoUsuario] = useState('')

	async function onClick() {
		const data = {
			Nombre: nombre,
			Apellido: apellido,
			Email: email,
			Password: password,
			TipoUsuario: tipoUsuario,
			IdRefugio: 1,
		}

		const { status } = await axios.post(
			'http://192.168.0.115:5000/Usuario',
			data
		)
		if (status === 201) {
			console.log('creo el usuario')
			// navigation.navigate('/')
		} else {
			console.log('hubo un error')
		}
	}

	return (
		<>
			<TextInput label="Nombre" onChangeText={(text) => setNombre(text)} />
			<TextInput label="Apellido" onChangeText={(text) => setApellido(text)} />
			<TextInput label="Email" onChangeText={(text) => setEmail(text)} />
			<TextInput
				label="Password"
				onChangeText={(text) => setPassword(text)}
				secureTextEntry={true}
			/>
			<Text>Tipo Usuario</Text>
			<Picker
				selectedValue={tipoUsuario}
				onValueChange={(itemValue) => setTipoUsuario(itemValue)}
			>
				<Picker.Item label="Refugio" value={true} />
				<Picker.Item label="Persona" value={false} />
			</Picker>

			<Button
				onPress={onClick}
				title="Enviar"
				color="#841584"
				accessibilityLabel="hola"
			/>
		</>
	)
}

export default Registrarse
