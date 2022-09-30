import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"

/**
 * Stacks
 */
import MainStack from "./stacks/MainStack"
import ComprasStack from "./stacks/ComprasStack"
import AplicantesStack from "./stacks/AplicantesStack"

const Tab = createBottomTabNavigator()

const PAGES = {
	homeStack: "Home",
	comprasStack: "Compras",
	AplicantesStack: "Aplicante",
}

const MainNavigation = () => {
	const screenOptions = ({ route }) => ({
		headerShown: false,
		tabBarIcon: ({ focused, color, size }) => {
			let iconName
			let rn = route.name

			if (rn === PAGES.homeStack) {
				iconName = focused ? "home" : "home-outline"
			} else if (rn === PAGES.comprasStack) {
				iconName = focused ? "list" : "list-outline"
			} else if (rn === PAGES.AplicantesStack) {
				iconName = focused ? "person" : "person"
			}
			return <Ionicons name={iconName} size={size} color={color} />
		},
	})

	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen name={"Home"} component={MainStack} />
			<Tab.Screen name={"Aplicante"} component={AplicantesStack} />
			<Tab.Screen name={"Compras"} component={ComprasStack} />
		</Tab.Navigator>
	)
}

export default MainNavigation
