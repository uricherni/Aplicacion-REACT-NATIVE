import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import PetCard from "../componentes/PetCard"
import axios from "axios"
const Home = () => {
	const { top } = useSafeAreaInsets()
	const [mascotas, setMascotas] = useState()

	useEffect(() => {
		consultarData()
	}, [])

	const consultarData = async () => {
		const { data } = await axios.get("http://10.152.2.99:5000/Mascota")
		setMascotas(data)
	}

	return (
		<View style={styles.fondo}>
			<Text style={styles.Texto}>Lista de mascotas para adoptar:</Text>
			{mascotas && (
				<View style={ContenedorCards.container}>
					<FlatList
						data={mascotas}
						keyExtractor={(mascota, index) => index}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => <PetCard mascota={item} />}
						ListHeaderComponent={
							<Text
								style={{
									...styles.title,
									top: top,
									paddingBottom: 10,
									marginBottom: top + 20,
								}}
							>
								Mascotas
							</Text>
						}
					/>
				</View>
			)}
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	Texto: {
		color: "#000",
		fontSize: 12,
		fontWeight: "bold",
		flex: 1,
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
	},
})
const ContenedorCards = StyleSheet.create({
	container: {
		alignContent: "center",

		margin: 37,
	},
})
export default Home
