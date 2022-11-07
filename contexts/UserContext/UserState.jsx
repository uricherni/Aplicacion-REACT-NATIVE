import { useReducer } from 'react'
import { UserContext } from './UserContext'
import userReducer from './userReducer'
import { api } from '../../api'

const INIT_STATE = {
	//Estos son los que guarda el ...state
	usuario: null,
}

export const UserState = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, INIT_STATE)

	const loginUsuario = async (email, password) => {
		const data = {
			Email: email,
			Password: password,
		}
		const result = await api.post('Usuario/login', data)
		dispatch({
			type: 'LOGIN',
			payload: result.data.usuario,
		})
	}
	return (
		// eslint-disable-next-line react/react-in-jsx-scope
		<UserContext.Provider
			value={{
				usuario: state.usuario,
				loginUsuario,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
