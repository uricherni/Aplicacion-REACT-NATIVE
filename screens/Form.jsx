/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"
import {
	TextInput,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	Text,
	FlatList,
} from "react-native"
import axios from "axios"

const Item = ({ item }) => {
	const [textValue, setValue] = useState("")

	return (
		<>
			<Text style={styles.label.Texto}>{item.Descripcion} </Text>
			<TextInput
				style={styles.input}
				value={textValue}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Respuesta"
				keyboardType="default"
			/>
		</>
	)
}

const Form = () => {
	let Formulario = []
	const [preguntas, setPreguntas] = useState([])

	useEffect(() => {
		consultarData()
	}, [])

	const consultarData = async () => {
		const { data } = await axios.get("http://10.152.2.123:5000/Pregunta")
		setPreguntas(data)
	}
	const [Text] = useState("hola")
	console.log("preguntas:")
	console.log(preguntas)

	const [Descripcion, setDescripcionText] = useState("")

	const [IdPostulacion, setIdPostulacionText] = useState("")

	const [IdPregunta, setIdPreguntaText] = useState("")

	const Respuesta = (params) => {
		let req = [
			{ IdPregunta: 1, Descripcion: "", IdPostulacion: IdPostulacion },
			{ IdPregunta: 2, Descripcion: "", IdPostulacion: IdPostulacion },
			{ IdPregunta: 3, Descripcion: "", IdPostulacion: IdPostulacion },
			{ IdPregunta: 4, Descripcion: "", IdPostulacion: IdPostulacion },
		]
		console.log(req)
		axios
			.post(`http://10.152.2.123	:5000/Respuesta`, req)
			.then(function (response) {
				setDescripcionText(Descripcion)
				setIdPreguntaText(IdPregunta)
				setIdPostulacionText(IdPostulacion)
				console.log(response)
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	return (
		<ImageBackground
			source={{
				uri: "https://i.pinimg.com/originals/29/8f/da/298fdab6747599714130d5670b81ceee.png",
			}}
			resizeMode="cover"
			blurRadius={0}
			style={{ flex: 1, opacity: 0.5 }}
		>
			<>
				<FlatList
					data={preguntas}
					keyExtractor={(item) => item.IdPregunta}
					showsVerticalScrollIndicator={true}
					numColumns={1}
					renderItem={({ item }) => <Item item={item} />}
				/>
				{/* <TouchableOpacity
					blurRadius={3}
					style={styles.Enviar}
					onPress={() => Respuesta(Descripcion.IdPregunta)}
				>
					<Text>Enviar</Text>
				</TouchableOpacity> */}
			</>
		</ImageBackground>
	)
}
export default Form

const styles = StyleSheet.create({
	input: {
		backgroundColor: "white",
		height: 50,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		color: "#000",
		fontWeight: "bold",
		
	},
	label: {
		margin: 4,
		padding: 6,
		color: "#000",
		fontSize: 20,
		
	},

	Text: {
		color: "#000",
		fontSize: 20,
		fontWeight: "bold",
		marginLeft: "auto",

		
	},
	Enviar: {
		color: "#000",
		borderColor: "#000",
		borderStyle: "solid",
		borderWidth: 5,
		textAlign: "center",
		backgroundColor: "#03fff7",
		marginLeft: "auto",
		marginRight: "auto",
		width: 100,
		height: 30,
	},

	scrollView: {
		backgroundColor: "pink",
		marginHorizontal: 20,
	},
	Cancelar: {
		color: "#000",
		borderColor: "#000",
		borderWidth: 5,
		borderStyle: "solid",
		textAlign: "center",
		backgroundColor: "#f0950c",
		marginLeft: "auto",
		marginRight: "auto",
		width: 300,
		height: 40,
		marginTop: 20,
	},
})

/*const  Form = ({route,navigation: { goBack } })=>{
    let Formulario = [];
    const [preguntas, setPreguntas] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/Formulario`)
        .then(function (response) {
            console.log(response.data);
            Formulario = response.data
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            console.log("Finally:")
            console.log(Formulario)
            setPreguntas(Formulario);
        })
    }, [])
    const [Text] = useState("hola");
    const [number] = useState(null);
    const Vuelta = ({PetCard}) => {
        const Navigation=useNavigation()
        Navigation.navigate("Home")
    }
    console.log("preguntas:")
    console.log(preguntas)
    return(
        <ImageBackground source={"https://i.pinimg.com/originals/29/8f/da/298fdab6747599714130d5670b81ceee.png"} resizeMode="cover"  blurRadius={4} style={{width: '100%', height: '100%', opacity:'0,5'}}>
        <>
            <ScrollView style ={styles.Texto}>
                {
                    preguntas.map(
                        (pregunta) => (
                            <>
                                <Text>{pregunta.IdFormulario}</Text>
                                <Text>{pregunta.Descripcion} </Text>
                                <TextInput
                                style={styles.input}
                                value={number}
                                placeholder="Respuesta"
                                keyboardType="numeric"
                                
                                />
                                
                            </>
                            
                        )
                    )
                    
                }
            </ScrollView>
            <> <TouchableOpacity    blurRadius={3} style={styles.Enviar}>
                        Enviar 
                    </TouchableOpacity></>
        </>
    
        </ImageBackground>
    )*/
