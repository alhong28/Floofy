import React from 'react'

const RandomPetBox = (props) => {
	return (
		<div className="randPetName">
			<h1>{props.pet.name}</h1>
			<p>{props.pet.animal}</p>
			<p>{props.pet.age}</p>
			<p>{props.pet.sex}</p>
			<p>{props.pet.shetlerId}</p>
			<p>{props.pet.shetlerPetId}</p>
			<p>{props.pet.contact.email["$t"]}</p>
			<p>{props.pet.contact.phone["$t"]}</p>
			<p>{props.pet.contact.state["$t"]}</p>
			<p>{props.pet.contact.zip["$t"]}</p>
		</div>
	)
}

export default RandomPetBox