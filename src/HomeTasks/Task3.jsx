import React, { useState } from 'react'

const Task3 = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <div className='bg-slate-400 text-white font-bold px-9 py-2 rounded-sm m-2'>{count}</div>
        <button className='bg-green-700 text-white font-bold px-2 py-1 rounded-md'
        onClick={()=>{
            setCount(count+1);
            count%5==0?alert("MileStone Achieved"):""
        }}>Increament</button>
    </div>
  )
}

export default Task3