import React from "react"
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	SectionList,
	StatusBar,
} from "react-native"

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

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
)

const Compra = () => (
	<SafeAreaView style={styles.container}>
		<SectionList
			sections={DATA}
			keyExtractor={(index) => index}
			renderItem={({ item }) => <Item title={item} />}
			renderSectionHeader={({ section: { title } }) => (
				<Text style={styles.header}>{title}</Text>
			)}
		/>
	</SafeAreaView>
)

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

export default Compra
