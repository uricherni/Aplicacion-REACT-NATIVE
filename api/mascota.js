import { api } from "./"

export const getMascotas = async (primario, foraneo) => {
	console.log(api)
	const {data} = await api.get("localhost:5000" `/users?primario=${primario}&foraneo=${foraneo}`)

	return data
}