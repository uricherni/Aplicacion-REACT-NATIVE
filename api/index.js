
import axios from 'axios'

//TODO: Cambiar por url de cada persona
const BASE_API = 'http://10.152.2.122:5000'

export const api = axios.create({
	baseURL: `${BASE_API}`,
})