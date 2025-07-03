import React, { useEffect, useState } from 'react'

const UseEffectIntro = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState(0)

    useEffect(() => {
      const handleCount = ()=>setCount(count+1);
      console.log("UseEffect Executed") 
    }, [])
    
    
    const handleState = ()=>setState(state-1);

    console.log(count)
    console.log(state)
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-full'>
        <h1 className='text-xl font-bold text-black'>{count}</h1>
        <button onClick={handleCount} className='bg-blue-700 text-white font-semibold rounded-md px-2 py-1'>increase</button>
        <h1 className='text-xl font-bold text-black'>{state}</h1>
        <button onClick={handleState} className='bg-blue-700 text-white font-semibold rounded-md px-2 py-1'>decrease</button>
    </div>
  )
}

export default UseEffectIntro;