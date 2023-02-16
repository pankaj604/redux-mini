import React from 'react'
import {INC , DEC } from "./Action/Index"

import { useSelector ,useDispatch } from 'react-redux'
const App = () => {

  const mystate = useSelector((state) => 
    state.Changenum
  )
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>redux mini project</h1>
        <input typ="text" value={mystate}></input>
        <button onClick={()=> dispatch(INC(5)) }>+</button>
        <button onClick={()=> dispatch(DEC()) }>-</button>
      </div>
    </div>
  )
}

export default App