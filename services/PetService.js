import pets from "./PetData.json"

async function getPets(){
	return pets
}

export default {
	getPets, 
}