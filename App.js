import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {UserState} from './contexts/UserContext/UserState'
import MainNavigation from './Navigation/MainNavigation'
import NotAuthStack from './Navigation/NotAuthStack'

const App = () => {
	return (
		<NavigationContainer>    
			<UserState>
				<NotAuthStack/>
			</UserState>
		</NavigationContainer>
	)
}
export default App
