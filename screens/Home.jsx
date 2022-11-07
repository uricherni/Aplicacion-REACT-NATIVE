import React, { useEffect, useState, useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PetCard from '../componentes/PetCard'
import { api } from '../api'
import { UserContext } from '../contexts/UserContext/UserContext'
const Home = () => {
	const { top } = useSafeAreaInsets()
	const [mascotas, setMascotas] = useState()

	useEffect(() => {
		consultarData()
	}, [])

	const consultarData = async () => {
		const { data } = await api.get('/Mascota')
		setMascotas(data)
	}
	// const { usuario } = useContext(UserContext)
	return (
		<View style={styles.fondo}>
			<Text style={styles.Texto}>Lista de mascotas para adoptar:</Text>
			{/* <Text style={styles.Texto}>{usuario.Nombre}</Text> */}
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
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	Texto: {
		color: '#000',
		fontSize: 12,
		fontWeight: 'bold',
		flex: 1,
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
	},
})
const ContenedorCards = StyleSheet.create({
	container: {
		alignContent: 'center',

		margin: 37,
	},
})
export default Home
