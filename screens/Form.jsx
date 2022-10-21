/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import {
	Text,
	TextInput,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	View,
	FlatList,
} from 'react-native'
import axios from 'axios'

const Item = ({ item }) => {
	const [textValue, setValue] = useState('')

	return (
		<>
			<Text style={styles.label}>{item.Descripcion} </Text>
			<TextInput
				style={styles.input}
				value={textValue}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Respuesta"
				keyboardType="default"
			/>
		</>
	)
}

const Form = ({ navigate }) => {
	// let Formulario = []
	const [preguntas, setPreguntas] = useState([])
	const [respuestas, setRespuestas] = useState([])
	// const [respuesta, setRespuesta] = useState(
	// 	Array(18).fill({
	// 		Descripcion: '',
	// 		IdPregunta: 0,
	// 		IdPostulacion: 0,
	// 	})
	// )

	const [respuesta, setRespuesta] = useState({
		Descripcion: '',
		IdPregunta: 0,
		IdPostulacion: 0,
	})

	useEffect(() => {
		consultarData()
	}, [])

	const consultarData = async () => {
		const { data } = await axios.get('http://192.168.0.115:5000/Pregunta')
		setPreguntas([data[0]])
		// setRespuesta(
		// 	respuesta.map((resp, index) => {
		// 		resp.Descripcion,
		// 			(resp.IdPregunta = index + 1),
		// 			(resp.IdPostulacion = 0)
		// 	})
		// )
	}

	const onChange = (event, index, idPregunta) => {
		const { text } = event.nativeEvent
		const respuestas = []
		// for (var i = 0; i < respuesta.length; i++) {
		// 	const res = respuesta[i]
		// 	if (i === index) {
		// 		res.Descripcion = text
		// 		res.IdPostulacion = 1
		// 		res.IdPregunta = idPregunta
		// 	}
		// 	respuestas.push(res)
		// 	setRespuesta([...respuesta, respuestas])
		// }
		respuesta.map((res, i) => {
			if (i === index) {
				res.Descripcion = text
				res.IdPostulacion = 1
				res.IdPregunta = idPregunta
			}
			return res
			// 	respuestas.push(res)
			// })
		})
	}

	const Respuesta = () => {
		console.log(respuesta)
		// respuesta.map((res) => {
		// 	axios
		// 		.post(`http://192.168.0.115:5000/Respuesta`, res)
		// 		.then(function (response) {
		// 			console.log('guardo')
		// 		})
		// 		.catch(function (error) {
		// 			console.log(error)
		// 		})
		// })

		axios
			.post(`http://192.168.0.115:5000/Respuesta`, respuesta)
			.then(function (response) {
				console.log('guardo')
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity
				blurRadius={3}
				style={styles.Enviar}
				onPress={() => Respuesta()}
			>
				<ImageBackground
					source={{
						uri: 'https://i.pinimg.com/originals/29/8f/da/298fdab6747599714130d5670b81ceee.png',
					}}
					resizeMode="cover"
					blurRadius={0}
					style={{ flex: 1, opacity: 0.5 }}
				>
					<FlatList
						data={preguntas}
						keyExtractor={(item) => item.IdPregunta}
						showsVerticalScrollIndicator={true}
						numColumns={1}
						renderItem={({ item, index }) => {
							return (
								// <Item item={item}/>
								<>
									<Text style={styles.label}>{item.Descripcion} </Text>
									<TextInput
										style={styles.input}
										value={respuesta.Descripcion}
										// onChange={(event) =>
										// 	onChange(event, index, item.IdPregunta)
										// }
										onChangeText={(text) =>
											setRespuesta({ ...respuesta, Descripcion: text })
										}
										placeholder="Respuesta"
										keyboardType="default"
									/>
								</>
							)
						}}
					/>
				</ImageBackground>
				<Text>Enviar</Text>
			</TouchableOpacity>
		</View>
	)
}
export default Form

const styles = StyleSheet.create({
	input: {
		backgroundColor: 'white',
		height: 50,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		color: '#000',
	},
	label: {
		margin: 4,
		padding: 6,
		color: '#000',
		fontSize: 20,
	},

	Texto: {
		color: '#000',
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 'auto',
	},
	Enviar: {
		flex: 1,
		color: '#000',
		textAlign: 'center',
		backgroundColor: '#03fff7',
		marginLeft: 'auto',
		marginRight: 'auto',
		// width: 100,
		height: 30,
	},

	scrollView: {
		backgroundColor: 'pink',
		marginHorizontal: 20,
	},
	Cancelar: {
		color: '#000',
		borderColor: '#000',
		borderWidth: 5,
		borderStyle: 'solid',
		textAlign: 'center',
		backgroundColor: '#f0950c',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: 300,
		height: 40,
		marginTop: 20,
	},
})
