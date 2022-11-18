import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from '../screens/Login'
import Inicio from '../screens/Inicio'
import Registrarse from '../screens/Registrarse'
import Home from '../screens/Home'
import Form from '../screens/Form'

const Stack = createNativeStackNavigator()

const NotAuthStack = () => {
	return (
		<Stack.Navigator
			initialRouteName={"Inicio"}
		>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Inicio"
				component={Inicio}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Registrarse"
				component={Registrarse}
			/>

			<Stack.Screen
				options={{ headerShown: false }}
				name="LogIn"
				component={LogIn}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Home"
				component={Home}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Form"
				component={Form}
			/>
		</Stack.Navigator>
	)
}

export default NotAuthStack
