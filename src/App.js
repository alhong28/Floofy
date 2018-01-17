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
      		<div className="jumbotron container-fluid">
      			<img src={require("./images/floofy.jpg")} />
      			<br></br>
      			<br></br>
      			<br></br>
      			<p className="lead motto">A Friend in Need is a Floof indeed!</p>   			
      		</div>

      		<br></br>

	      	<div className="card container" style={{width: 45% +'em'}}>
	      		<div className="card-body">
	      			<h5 className="card-title randfloof">Floof of Fate</h5>
	      			<img src={require("./images/dog.jpeg")} />
			      		<button className="btn-success" onClick={this.randomClick}>Get Random Pet!</button>
			     </div>
			</div>

			<br></br>
			<br></br>
			<br></br>

			<div className="card container" style={{width: 45% + 'em'}}>
				<div className="card-body">
					<h5 className="card-title searchfloof">Search Floof</h5>
					<img src={require("./images/fox.jpeg")} />
				      	<input value={this.state.zip} onChange={this.zipChange} type="text"/>
				      	<select onChange={this.selectType}>
				      		{options}
				      	</select>
				      	<button className="btn-info" onClick={this.handleSubmit}>Search</button>
				</div>
			</div>	

			<br></br>
			<br></br>
			<br></br>

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