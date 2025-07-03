import React, { useState } from 'react'

const Task2 = () => {
    const [state, setState] = useState(false)
  return (
    <div>
        <label htmlFor="pass">Password</label>
        <input type={state?"text":"password"} id='pass'  className='border border-black rounded-md pl-3 m-2 pb-1' placeholder='password'/>
        <input type="checkbox" onClick={()=>setState(!state)} id='check'/>
        <label htmlFor="check">Show Password</label>
    </div>
  )
}

export default Task2