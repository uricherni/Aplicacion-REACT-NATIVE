import React, { useEffect, useState } from "react"
import {StyleSheet,Text,View,SafeAreaView,FlatList,StatusBar,} from "react-native"
import axios from "axios"

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
