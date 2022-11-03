import React, { useState } from 'react'
import { TextInput, Text } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import { Button } from 'react-native'

const Registrarse = ({ navigation }) => {
	const [text, setText] = useState('')
	const [value, setValue] = useState('')

	function onClick() {
		navigation.navigate('Login')
	}

	return (
		<>
			<TextInput label="Nombre" onChangeText={(text) => setText(text)} />
			<TextInput label="Apellido" onChangeText={(text) => setText(text)} />
			<TextInput label="Email" onChangeText={(text) => setText(text)} />
			<TextInput
				label="Password"
				onChangeText={(text) => setText(text)}
				secureTextEntry={true}
			/>
			<Text>Tipo Usuario</Text>
			<Picker
				selectedValue={value}
				onValueChange={(itemValue) => setValue(itemValue)}
			>
				<Picker.Item label="Refugio" value="refugio" />
				<Picker.Item label="Persona" value="persona" />
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
