/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from 'react'
import {
	Text,
	TextInput,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	View,
	FlatList,
	Button,
} from 'react-native'
import { api } from '../api'
import { UserContext } from '../contexts/UserContext/UserContext'

const Form = ({ route, navigate }) => {
	const [preguntas, setPreguntas] = useState([])

	const idMascota = route.params
	const { usuario } = useContext(UserContext)

	useEffect(() => {
		consultarData()
	}, [])

	const consultarData = async () => {
		const { data } = await api.get('/Pregunta')
		setPreguntas(data)
	}
	const [respuesta, setRespuesta] = useState(
		Array(18).fill({
			Descripcion: '',
			IdPregunta: 0,
			IdPostulacion: 0,
		})
	)

	const onChange = (event, index, idPregunta) => {
		const { text } = event.nativeEvent
		const newArray = respuesta.map((item, i) => {
			if (index === i) {
				return {
					...item,
					Descripcion: text,
					IdPregunta: idPregunta,
					IdPostulacion: 0,
				}
			} else {
				return item
			}
		})
		setRespuesta(newArray)
	}

	const Respuesta = () => {
		console.log(respuesta)
		//El envio de data es ok!
		respuesta.map((res) => {
			api
				.post('/Respuesta', res) //res contiene las 18 respuestas
				.then(function (response) {
					console.log('guardo')
				})
				.catch(function (error) {
					console.log(error)
				})
		})
		const dataPostulacion = {
			IdMascota: idMascota,
			IdUsuario: usuario.IdUsuario,
			Aceptado: true,
		}
		//ejecutamos la postulacion
		const { data } = api.post('/Postulaciones', dataPostulacion)

		console.log('Postulacion', data)
	}

	return (
		<View style={{ flex: 1 }}>
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
						//item => Pregunta posicion segun index

						return (
							// <Item item={item}/>
							<>
								<Text style={styles.label}>{item.Descripcion} </Text>
								<TextInput
									style={styles.input}
									value={respuesta[index].Descripcion}
									onChange={(event) => onChange(event, index, item.IdPregunta)}
									// onChangeText={(text) =>
									// 	setRespuesta({ ...respuesta, Descripcion: text })
									// }
									name={'Descripcion'}
									placeholder="Respuesta"
									keyboardType="default"
								/>
							</>
						)
					}}
				/>
			</ImageBackground>

			<Button
				title="Enviar"
				blurRadius={3}
				style={styles.Enviar}
				onPress={() => Respuesta()}
			/>
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
		width: 100,
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
