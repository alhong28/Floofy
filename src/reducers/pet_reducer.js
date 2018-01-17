export default function petReducer (state = {randomPet: {}, pets: []}, action){
	switch(action.type){
		case "RANDOM_PET":
			return {...state, randomPet: action.payload}
		case "SEARCH_PET":
			return {...state, pets: action.payload}
		// case "ADD_ONE":
		// 	return {...state, value: state.value + action.value}
		// case "PUT_ONE_IN":
		// 	return {...state, array: [...state.array, action.payload]}
		default: 
			return state
	}
}