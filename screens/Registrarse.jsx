import React, {
	TouchableOpacity,
	View,
	Image,
	StyleSheet,
	Text,
} from "react-native"

const Registrarse = ({ navigation }) => {
	function redirect() {
		navigation.navigate("LogIn")
	}

	return (
		<>
			<View style={styles.container}>
				<TouchableOpacity
					onPress={redirect}
					style={{
						width: 200,
						height: 200,
						flex: 2,
						marginLeft: 20,
						marginTop: 20,
					}}
				>
					<View style={styles.Person}>
						<Text style={styles.Texto}>Registrarse mediante persona</Text>
					</View>
					<Image
						style={styles.img}
						source={require("../assets/registerIcon.png")}
					></Image>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={redirect}
					style={{ width: 200, height: 200, flex: 2, marginLeft: 20 }}
				>
					<View style={styles.Person}>
						<Text style={styles.Texto}> Registrarse mediante refugio </Text>
					</View>
					<Image
						style={styles.img}
						source={require("../assets/houseIcon.png")}
					></Image>
				</TouchableOpacity>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	img: {
		width: 60,
		height: 70,
		aspectRatio: 0.9,
		flex: 1,
	},
	Texto: {
		// marginTop: "100px",
		color: "#000",
		fontSize: 15,
		fontWeight: "bold",
		textAlign: "center",
		// fontSize: "72px",
	},
	container: {
		backgroundColor: "#cdfdfd",
		flexDirection: "column",
		textAlign: "center",
		padding: 20,
		flex: 1,
	},
	Person: {
		fontSize: 25,
		fontfamily: "Monospace",
		textAlign: "center",
	},
})

export default Registrarse
