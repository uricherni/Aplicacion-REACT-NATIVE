/* eslint-disable react/prop-types */
import React from "react"
import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, Card, Title } from "react-native-paper"
 import axios from "axios"

const PetCard = ({ mascota }) => {
	const navigation = useNavigation()
	const { Nombre, Edad, Estado, Descripcion, NombreRefugio, NombreRaza, Foto } = mascota

const bodyPostulaciones = {

    IdUsuario: 2,
    IdMascota:6,
    Aceptado: 1, 

}

const onClick= async()=>{
const{data}=await axios.post({
    url: 'http://10.152.2.122:5000/Postulaciones',
    data: bodyPostulaciones
})

console.log(data)
navigation.navigate('Form')
}

	return (
		<View>
			<Card>
				<Card.Content>
					<Title>
					<Text> Refugio: {NombreRefugio} </Text>
					</Title>
					<Text> Nombre:{Nombre}</Text>
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
					<TouchableOpacity onTouchStart={onClick}> Aplicar </TouchableOpacity>
				</Card.Actions>
			</Card>
		</View>
	)

}
                
export default PetCard
            
