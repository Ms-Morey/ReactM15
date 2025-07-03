import React, { useState } from 'react'
import Task5Child from './Task5Child'

const Task5 = () => {
    const [state, setState] = useState({name:""})
  return (
    <div>
        <Task5Child props={state}/>
        <label htmlFor="name">Parent Name</label>
        <input type="text" id='name' placeholder='Enter Name' className='border border-black rounded-md p-2' onChange={(e)=>setState({...state, name:e.target.value})} />
        
    </div>
  )
}

export default Task5