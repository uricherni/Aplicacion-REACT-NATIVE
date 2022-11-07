import axios from "axios";

export async function dologin(usuario, contraseña){
	await axios({
		method: 'post',
		url: "http://10.152.2.99:5000/Usuario",
		data: {
			usuario: usuario,
			Password: contraseña
		}
	})
}