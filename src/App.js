import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
// import { addOne, putOneIn } from './actions/pets'
import { getRandom, searchByAnimal } from './actions/pets'
import RandomPetBox from './components/RandomPetBox'
import PetSearch from './components/PetSearch'
import { Route, withRouter } from 'react-router-dom'

class App extends Component {

	state = {
		zip: "",
		selectedType: "cat"
	}

	randomClick = (event) => {
		this.props.getRandom(this.props.history)
	}

	selectType = (event) => {
		let type = event.target.value
		this.setState({selectedType: type})
	}

	zipChange = (event) => {
		this.setState({zip: event.target.value})
	}

	handleSubmit = (event) => {
		this.props.searchByAnimal(this.state.selectedType, this.state.zip, this.props.history)
	}

  render() {
  	console.log(this.props)
	let animalTypes = ["barnyard", "bird", "cat", "dog", "horse", "reptile", "smallfurry"]

	let options  = animalTypes.map(type => {
		return <option value={type} key={type}>{type}</option>
	})

    return (
      <div>
      	<button className="btn-primary" onClick={this.randomClick}>Get Random Pet!</button>
      	<input value={this.state.zip} onChange={this.zipChange} type="text"/>
      	<select onChange={this.selectType}>
      		{options}
      	</select>
      	<button onClick={this.handleSubmit}>Search</button>

      	<Route path="/random" render={(props) => <RandomPetBox pet={this.props.randomPet}/>} />
      	<Route path="/search" render={(props) => <PetSearch {...props} pets={this.props.pets} />}/>
      </div>
    );
  }
}

function mapStateToProps (state) {
	return {
		randomPet: state.pets.randomPet,
		pets: state.pets.pets
	}
}

function mapDispatchToProps (dispatch){
	return {
		getRandom: (history) => {
			dispatch(getRandom(history))
		},
		searchByAnimal: (type, zip, history) => {
			dispatch(searchByAnimal(type, zip, history))
		}

		// beef: () => {
		// 	dispatch(addOne())
		// },
		// putOneIn: () => {
		// 	dispatch(putOneIn())
		// }
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// barnyard, bird, cat, dog, horse, reptile, smallfurry