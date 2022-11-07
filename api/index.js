
import axios from 'axios'

//TODO: Cambiar por url de cada persona
const BASE_API = 'http://192.168.0.115:5000'

export const api = axios.create({
	baseURL: `${BASE_API}`,
})