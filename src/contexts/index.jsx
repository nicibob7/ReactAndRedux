import React, { useState, useContext, createContext } from "react";

// 1 -> Create a context
const AnimalContext = createContext();

// 2 -> Create a provider
export const AnimalProvider = ({ children }) => {
    const [animals, setAnimals] = useState([
        {
            name: "Dog",
            class: "Mammal",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg",
            id: 1
        },
        {
            name: "Cat",
            class: "Mammal",
            image: "https://www.animaltrust.org.uk/wp-content/uploads/cat-3639857_1920.jpg",
            id: 2
        },
        {
            name: "Owl",
            class: "Bird",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/%27Tutoke%27_-_geograph.org.uk_-_2532332.jpg/1200px-%27Tutoke%27_-_geograph.org.uk_-_2532332.jpg",
            id: 3
        }
    ]);

    return (
        <AnimalContext.Provider value={{ animals, setAnimals }}>
            {children}
        </AnimalContext.Provider>
    );
};

// 3 -> Consume the context
export const useAnimal = () => useContext(AnimalContext);