import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './action-creators'

import {Home, Animals, Animal} from './pages'
import { AnimalProvider } from './contexts'
import Nav from './Nav'

const App = () => {
const animals = AnimalProvider(5).props.value.animals
const votes = useSelector(state => state.voteReducer)
const dispatch = useDispatch();
const { upVote, downVote } = bindActionCreators(actionCreators, dispatch)

  return (
    <div>
    <AnimalProvider>
    <Routes>
        <Route path='/' element={<Nav />}>
            <Route index element={<><Home votes={votes} /><button onClick={() => upVote()}>Vote up</button><button onClick={() => downVote()}>Vote down</button></>}/>
            <Route path="/animals" element={<Animals animals={animals} />}/>
            <Route path="/animals/:id" element={<Animal animals={animals}/>}/>
        </Route>    
        <Route path='*' element={<h1>Not Found</h1>}></Route>
    </Routes>
    </AnimalProvider>
    </div>
  )
}

export default App