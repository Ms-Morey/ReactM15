import React, { useState } from 'react'

const T15_Dropdown = () => {
    const [state, setState] = useState("");
  return (
    <div>
       <select className='border-[2px] border-black m-5' onChange={(e)=>{setState(e.target.value)}}>
        <option value=""></option>
        <option value="react">React</option>
        <option value="node">Node</option>
        <option value="java">Java</option>
        <option value="spring">Spring</option>
        <option value="angular">Angular</option>
       </select>
       <h1 className='m-5'>{state}</h1>
    </div>
  )
}

export default T15_Dropdown