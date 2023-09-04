import React from 'react'
import { AnimalCard } from '../../components'
import { useNavigate } from "react-router";


function Animals(props) {
    const animals = props.animals

    const navigate = useNavigate()

    function handleClick(e){
        const data = e.target.parentNode
        const route = data.id
        navigate(`/animals/${route}`)
    }

    return (
        <div onClick={handleClick}>    
            <AnimalCard animals={animals}/>
        </div>
    )
}

export default Animals