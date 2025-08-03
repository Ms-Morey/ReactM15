import React, { useEffect, useState } from 'react'

const T20_CounterLog = () => {
    const [state, setState] = useState(0);
    useEffect(()=>{
        console.log("count : ",state)
    },[state])
  return (
    <div className='flex flex-col items-center justify-center mt-3'>
        <h1>{state}</h1>
        <button className='bg-blue-400 rounded-md px-3 py-2 text-white font-semibold' onClick={()=>{setState(state+1)}}>Increase</button>
    </div>
  )
}

export default T20_CounterLog