import React, { createContext, useState } from "react"
import MainNavigation from "../Navigation/MainNavigation"
import NotAuthStack from "../Navigation/NotAuthStack"

export const UserContext = createContext()

export const UserProvider = () => {
	const [user, SetUser] = useState(false)
	return (
		<UserContext.Provider value={{ SetUser }}>
			{user ? <MainNavigation /> : <NotAuthStack />}
		</UserContext.Provider>
	)
}
