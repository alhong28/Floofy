import React from 'react'

const PetSearch = (props) => {
	let rows = props.pets.map(pet => {
		return (
			<tr>
				<td>{pet.name}</td>
				<td>{pet.animal}</td>
				<td>{pet.age}</td>
				<td>{pet.sex}</td>
				<td>{pet.shetlerId}</td>
				<td>{pet.shetlerPetId}</td>
				<td>{pet.contact.email["$t"]}</td>
				<td>{pet.contact.phone["$t"]}</td>
				<td>{pet.contact.state["$t"]}</td>
				<td>{pet.contact.zip["$t"]}</td>
			</tr>
		)
	})

	return (
		<table>
			<tr>
				<th>Name</th>
				<th>Animal Type</th>
				<th>Age</th>
				<th>Sex</th>
				<th>Shelter Id</th>
				<th>Shelter Pet Id</th>
				<th>Email</th>
				<th>Phone Number</th>
				<th>State</th>
				<th>Zip Code</th>
			</tr>
			{rows}
		</table>
	)
}

export default PetSearch