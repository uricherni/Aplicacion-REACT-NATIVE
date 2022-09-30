import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import { UserProvider } from "./contexts/useUser"

const App = () => {
	return (
		<NavigationContainer>    
			<UserProvider/>
		</NavigationContainer>
	)
}
export default App


// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: "center",
// 		paddingTop: Constants.statusBarHeight,
// 		backgroundColor: "#ecf0f1",
// 		padding: 8,
// 	},
// 	paragraph: {
// 		margin: 24,
// 		fontSize: 18,
// 		fontWeight: "bold",
// 		textAlign: "center",
// 	},
// })





/* export default function App() {
 const [mascotas, setMascotas] = useState([]);
   
 useEffect(() => {
       (async function(){
     const respuesta = await axios.get('http://localhost:56935/api/Mascotas');
      setMascotas(respuesta.data)
       
     })();
   },[]);
      
    fetch('http://192.168.0.6;/api/Mascotas')
   .then((response) => response.json())
   .then((json) => {
     console.log(json);
   })
   .catch((error) => {
     console.error(error);
   });
   
   console.log(mascotas)
   
   const Item = ({ title, title2, title3 }) => (
     <View style={styles.item}>
       <Text style={styles.title}>{title}</Text>
       <Text style={styles.title}>{title2}</Text>
       <Text style={styles.title}>{title3}</Text>
     </View>
   );
  



 return (
   <>
     {listedemascote}
   </>
 );
}



const client = axios.create({baseURL:'http://localhost:5000/Formulario'});

export const get = async()=> {
return client.get('').then(response => response.data)
.catch(error=> {
  console.log(error)
  throw error;
});


}*/