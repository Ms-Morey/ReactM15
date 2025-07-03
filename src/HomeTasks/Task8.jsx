import React, { useState } from 'react'

const Task8 = () => {
    const [text, setText] = useState("");
  return (
    <div className='flex flex-col gap-2'>
        <strong>Count Of Chars : {text.length}</strong>
        <input 
        type="text"
        className='border border-black rounded-md p-2' 
        placeholder='enter text here'
        onChange={(e)=>setText(e.target.value)}/>
    </div>
  )
}

export default Task8