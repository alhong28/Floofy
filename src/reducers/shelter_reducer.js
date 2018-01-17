export default function shelterReducer (state = 100, action){
	switch(action.type){
		case "ADD_ONE":
			return state + action.value
		default: 
			return state
	}
}