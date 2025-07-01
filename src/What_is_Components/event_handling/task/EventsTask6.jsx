import React, { useState } from 'react'

const EventsTask6 = () => {
    const [state, setState] = useState({
        m1s1 : "gray",
        m1s2 : "white"
    })

    let handleClick = ()=>{
        setState((prevState)=>{return{...prevState, m1s1:"white"}})
    }

  return (
    <div>
        <h1>{state.m1s1}</h1>
        <button onClick={handleClick} className='bg-blue-700 rounded-md py-2 px-5 text-white font-semibold'>click</button>
    </div>
  )
}

export default EventsTask6;