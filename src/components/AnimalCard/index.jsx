import React from "react";

const AnimalCard = (props) => {
    const data = props.animals
    console.log(data)

    return (
        <>
            {data.map((animal) => (
                <div id={animal.id} key={animal.id}>
                <h2>{animal.name}</h2>
                <h3>{animal.class}</h3>
                <img src={animal.image} alt={`Image of a ${animal.name}`} />
                </div>
            ))}
        </>
    )
}

export default AnimalCard