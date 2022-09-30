import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Compras from "../../screens/Compra"

const Stack = createNativeStackNavigator()

const ComprasStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Compras"
				component={Compras}
			/>
		</Stack.Navigator>
	)
}

export default ComprasStack
