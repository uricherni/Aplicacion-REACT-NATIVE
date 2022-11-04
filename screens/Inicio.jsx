/* eslint-disable react/prop-types */
import React from "react"
import { TouchableOpacity, View, StyleSheet, Image, Text } from "react-native"

const Inicio = ({ navigation }) => {
	function login() {
		navigation.navigate("LogIn")
	}
	return (
		<View style={{ ...styles.Fondo, top: 30 }}>
			<Text style={styles.Texto}>Bienvenido a Petfy</Text>
		 
			<Image
				style={styles.img}
				source={require("../assets/Inicio.png")}
			></Image>
			<TouchableOpacity style={styles.Enviar} onPress={login}>
				<Text>Continuar</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	Fondo: {
		flex: 1,
		backgroundColor: "#cdfdfd",
	},
	Enviar: {
		margin: 2,
		color: "#000",
		// border: "5px solid black",
		backgroundColor: "#5F8CE1",
		marginLeft: "auto",
		marginRight: "auto",
		height: 40,
		borderColor: "#FFE919",
		borderRadius: 30,
		padding: 10,
		textAlign: "center",
		marginTop: 35,
	},
	Texto: {
		// marginTop: "100px",
		color: "#000",
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
		// fontSize: "72px",
	},
	img: {
		margin: 3,
		width: "100%",
		aspectRatio: 1.2,
		resizeMode: 'stretch',
        borderWidth: 6,
    },
})

export default Inicio
