/* eslint-disable react/prop-types */
import React from "react"
import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Button, Card, Title } from "react-native-paper"
// import Axios from "axios"

const PetCard = ({ mascota }) => {
	const navigation = useNavigation()
	const { IdRefugio, Nombre, Edad, Estado, Raza, Descripcion, Foto } = mascota

	function onClick() {
		navigation.navigate("Form")
	}

	return (
		<View>
			<Card>
				<Card.Content>
					<Title>
						<Text>Refugio: {IdRefugio}</Text>
					</Title>
					<Text> {Nombre}</Text>
					<Text> {Edad}</Text>
					<Text> Estado: {Estado}</Text>
					<Text> Raza: {Raza}</Text>
					<Text> {Descripcion}</Text>
				</Card.Content>
				<Card.Cover
					source={{
						uri: `${Foto}`,
					}}
				/>
				<Card.Actions>
					<Button onTouchStart={onClick}> Aplicar </Button>
				</Card.Actions>
			</Card>
		</View>
	)
}
export default PetCard

// const styles = StyleSheet.create({
// 	Imagen:{
// 		flex: 1,
// 		height: 200,

// 	}

// })

/*const axios = require('axios');

    const  Form =({route,navigation: { goBack } })=>{
        let ghostList = [];
        const [Mascota, setMascota] = useState([]);
        useEffect(() => {
            axios.get(`http://localhost:5000/Mascota`)
            .then(function (response) {
                console.log(response.data);
                ghostList=response.data
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                console.log("Finally:")
                console.log(ghostList)
                setPreguntas(ghostList);
            })
        }, [])
        const [Text] = React.useState("hola");
        const [number] = React.useState(null);

        const Vuelta = ({PetCard}) => {
            const Navigation=useNavigation()
            Navigation.navigate("Home")
        }
        console.log("Mascota")
        console.log(Mascota)



        

const PetCard = ({refugio, nombre, edad, estado,raza,descripcion,id}) => {
    
    
    
    const Navigation=useNavigation()
    
    function onClick(){
        // alert('el id es:'+ id)
        Navigation.navigate("Form", {id, name: nombre})
    }
  
return (
    
 

    <Card>
            
            <Card.Content>

                    <Title>{refugio}</Title>
                    <Text> {nombre}</Text>
                    <Text> {edad}</Text>         
                    <Text> Estado: {estado}</Text>
                    <Text> Raza: {raza}</Text>
                    <Text> {descripcion}</Text>
            </Card.Content>
                <Card.Cover source={{ uri: 'https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2019/07/20/1012478.jpg' }} />
                <Card.Actions>
                    <Button onTouchStart={onClick}> Aplicar </Button>
                </Card.Actions>
                
        </Card>
        
 

  );

}
export default PetCard;


const styles = StyleSheet.create({
    Imagen:{
        width: "100%",
        height: "200px",

    }

});


*/
