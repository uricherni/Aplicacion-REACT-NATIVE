import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Aplicante from "../../screens/Aplicante"

const Stack = createNativeStackNavigator()

const AplicantesStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options= {{headerShown: false}}
				name='Aplicante'
				component={Aplicante}
			/>
		</Stack.Navigator>
	)
}

export default AplicantesStack