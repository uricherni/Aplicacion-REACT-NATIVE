
import axios from "axios"

const BASE_API = "https://jsonplaceholder.typicode.com"

export const api = axios.create({
	baseURL: `${BASE_API}`,
})