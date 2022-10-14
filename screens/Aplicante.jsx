import React, { useEffect, useState } from "react"
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	FlatList,
	Button,
	StatusBar,
} from "react-native"
import axios from "axios"

const DATA = [
	{
		title: "Alimentos",
		data: [
			"Alimento Agility Premium para perro adulto todos los tamaños sabor mix en bolsa de 20 kg",
		],
	},
	{
		title: "Alimentos",
		data: [
			"Alimento Royal Canin Club Performance Weight Control para perro adulto todos los tamaños sabor mix en bolsa de 15 kg",
		],
	},
	{
		title: "Alimentos",
		data: [
			"Alimento Nutrique Medium Puppy para perro cachorro de raza mediana sabor pavo en bolsa de 12 kg",
		],
	},
	{
		title: "Alimentos",
		data: ["Nutrique Perro Cachorro Mediano X 12 Kg"],
	},
	{
		title: "Alimentos",
		data: ["Alimento Balanceado Nutrique Skin Sensitive Dog 15kgs"],
	},
	{
		title: "Alimentos",
		data: [
			"Alimento Nutrique Medium Young Adult Dog para perro adulto de raza mediana sabor pavo y cerdo en bolsa de 12 kg",
		],
	},
	{
		title: "Alimentos",
		data: [
			"Alimento Nutrique Medium Young Adult Dog para perro adulto de raza mediana sabor pavo y cerdo en bolsa de 12 kg",
		],
	},
]

const Item = ({ item }) => (
	
	<View style={styles.item}>
	
		<Text style={styles.title}>IdUsuario{item.IdUsuario}--IdMascota-{item.IdMascota}</Text>
		<Text style={styles.title}>Nombre:Uriel {item.IdUsuario}--IdMascota-{item.IdMascota}</Text>
		
	</View>
)


const Aplicante = () => {
	const [aplicantes, setAplicantes] = useState()
	useEffect(() => {
		consultarData()
	}, [])

	const consultarData = async () => {
		const { data } = await axios.get("10.152.2.122:5000/Postulaciones")
		setAplicantes(data)
	}




	
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={aplicantes}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => <Item item={item} />}
				renderSectionHeader={({ section: { item } }) => (
				
					<Text style={styles.header}>{item.IdPostulante}</Text>
					
				)}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		marginHorizontal: 10,
	},
	item: {
		backgroundColor: "#00FFF7",
		padding: 20,
		marginVertical: 8,
	},
	header: {
		fontSize: 20,
		backgroundColor: "#009BFF",
	},
	title: {
		fontSize: 12,
	},
})

export default Aplicante
