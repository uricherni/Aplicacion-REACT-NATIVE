/* eslint-disable react/prop-types */
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Card, Title } from 'react-native-paper'
import axios from 'axios'

const PetCard = ({ mascota }) => {
	const navigation = useNavigation()
	function OnPress() {
		navigation.navigate('Form', IdMascota)
	}
	const {
		NombreMascota,
		Edad,
		Estado,
		Descripcion,
		NombreRefugio,
		NombreRaza,
		Foto,
		IdMascota,
	} = mascota

	return (
		<View>
			<Card>
				<Card.Content>
					<Title>
						<Text> Nombre: {NombreMascota} </Text>
					</Title>	
					<Text> Refugio: {NombreRefugio}</Text>				
					<Text> Edad:{Edad} años</Text>
					<Text> Estado: {Estado}</Text>
					<Text> Raza: {NombreRaza}</Text>
					<Text> {Descripcion}</Text>
				</Card.Content>
				<Card.Cover
					source={{
						uri: `${Foto}`,
					}}
				/>
				<Card.Actions>
					<TouchableOpacity onPress={OnPress}>
						<Text>APLICAR</Text>
					</TouchableOpacity>
				</Card.Actions>
			</Card>
		</View>
	)
}

export default PetCard
