// export function addOne(){
// 	return function(dispatch){
// 		dispatch({type: "ADD_ONE", value: 2})
// 	}
// }

// export function putOneIn(){
// 	return function(dispatch){
// 		dispatch({type: "PUT_ONE_IN", payload: "WOOOO"})
// 	}
// }



export function getRandom(history){
	return function(dispatch){
		fetch('http://api.petfinder.com/pet.getRandom?output=full&format=json&key=544197f2305ef238cde857d47ef52298')
		.then(res => res.json())
		.then(res => {
			let petData = res.petfinder.pet
			let newPet = {
				age: petData.age['$t'],
				animal: petData.animal['$t'],
				breeds: petData.breeds.breed,
				name: petData.name['$t'],
				shelterId: petData.shelterId['$t'],
				shelterPetId: petData.shelterPetId['$t'],
				sex: petData.sex['$t'],
				contact: petData.contact
			}

			dispatch({type: "RANDOM_PET", payload: newPet})
			history.push('/random')
		})
	}
}

export function searchByAnimal(animalType, zip, history){
	return function(dispatch){
		let url = `http://api.petfinder.com/pet.find?animal=${animalType}&location=${zip}&output=full&format=json&key=544197f2305ef238cde857d47ef52298`

		fetch(url)
		.then(res => res.json())
		.then(res => {
			let pets = res.petfinder.pets.pet.map(pet => {
				return {
					age: pet.age['$t'],
					animal: pet.animal['$t'],
					breeds: pet.breeds.breedseed,
					name: pet.name['$t'],
					shelterId: pet.shelterId['$t'],
					shelterPetId: pet.shelterPetId['$t'],
					sex: pet.sex['$t'],
					contact: pet.contact
				}
			})

			dispatch({type: "SEARCH_PET", payload: pets})
			history.push('/search')
		})	
	}
}