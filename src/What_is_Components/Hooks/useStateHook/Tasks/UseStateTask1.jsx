import React, { useState } from 'react'

const UseStateTask1 = () => {
const [count, setCount] = useState(0);
    return (
    <div className='flex justify-center items-center flex-col'>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(count+1);
        }} className='rounded-full bg-blue-600 px-4 py-2 border-t-red-700'>add</button>
    </div>
  )
}

export default UseStateTask1;