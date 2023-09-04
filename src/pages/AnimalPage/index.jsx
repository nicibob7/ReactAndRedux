import React from "react";
import { AnimalCard } from '../../components'
import { useParams } from 'react-router-dom';



function Animal(props) {
    const {id} = useParams()
    console.log(id)
    const animals = props.animals
    console.log(animals)
  return <div><AnimalCard animals={[animals[id - 1]]} /> </div>;
}

export default Animal;
