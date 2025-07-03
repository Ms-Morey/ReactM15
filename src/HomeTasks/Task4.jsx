import React, { useRef } from 'react'

const Task4 = () => {
    const inp = useRef();
  return (
    <div>
        <input ref={inp} type="text" className='border border-black rounded-md m-2 p-2' placeholder='Enter Name' />
        <button className='bg-blue-600 py-1 px-3 rounded-md text-white font-semibold' onClick={()=>{
           inp.current.focus()
        //    inp.setSelectionRange(inp.current.length(), inp.current.length()) 
        }}>focus</button>
    </div>
  )
}

export default Task4