import React, { useState } from 'react'

const Task1 = () => {
    const [state, setState] = useState(true);
  return (
    <div className={`${state?"bg-cyan-100":"bg-emerald-200"}`}>
      <h1></h1>
        <button className={state?"bg-green-900 text-white font-semibold py-2 px-6 rounded-md":"bg-red-600 text-white font-semibold py-2 px-6 rounded-md"}
        onClick={()=> setState(!state)}
        >{state?"OFF":"ON"}</button>
    </div>
  )
}

export default Task1;