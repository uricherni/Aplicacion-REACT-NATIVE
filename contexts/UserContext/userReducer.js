import { GET_LOGIN } from '../../types'




export default (state, action) => {
	switch (action.type) {
	case GET_LOGIN:
		return {
			...state,
			usuario: action.payload
		}
    
	default:
		return state
	}
    
}