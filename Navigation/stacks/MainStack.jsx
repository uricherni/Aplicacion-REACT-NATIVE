import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

/* Paginas */
import Form from "../../screens/Form"
import Home from "../../screens/Home"


/* Creacion del stack de paginas */
const Stack = createNativeStackNavigator()

const StackMain = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options= {{headerShown: false}}
				name='Home'
				component={Home}
			/>
			<Stack.Screen
				options= {{headerShown: true}}
				name='Form'
				component={Form}
			/>
          

		</Stack.Navigator>
	)
}

export default StackMain