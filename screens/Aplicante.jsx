import React, { useEffect, useState } from "react"
import {StyleSheet,Text,View,SafeAreaView,FlatList,StatusBar, TouchableOpacity, Button} from "react-native"
import axios from "axios"
import { api } from '../api'

const Item = ({ item, onPress, backgroundColor, textColor }) => (
	<TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
	  <Text style={[styles.title, textColor]}>{item.Nombre} quiere aplicar a: {item.NombreMascota}</Text>
	  <Button title="Aceptar" onPress={()=>{}}></Button>
	  <Button title="Reachazar" onPress={()=>{}}></Button>

	</TouchableOpacity>
  );

const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />

    );
  };

const Aplicante = () => {
	const [aplicantes, setAplicantes] = useState()
	useEffect(() => {
		consultarData()
	}, [])

	const consultarData = async () => {
		const { data } = await api.get('/Postulaciones')
		console.log(data)
		setAplicantes(data)
	}
	

	const Respuesta = async () => {
		const { data } = await api.udate('/Postulaciones')
		console.log(data)
		setAplicantes(data)
	}
	

	
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={aplicantes}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => <Item item={item} />}
				renderSectionHeader={({ section: { item } }) => (
				
					<Text style={styles.header}>{item.IdPostulante}sdvef</Text>
					
				)}
			/>
		</SafeAreaView>
	)
}
//Object.keys(aplicantes[0]).length
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
