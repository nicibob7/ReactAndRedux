import React, { useState } from 'react'

function Home(votes) {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>Home</h1>
            <h2>This is the homepage. Animals have {votes.votes} votes</h2>
        </div>
    )
}

export default Home