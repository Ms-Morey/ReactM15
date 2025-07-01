import React, { useState } from 'react'

const UseStateTask8 = () => {
    const [state, setState] = useState();
  return (
    <div>
      <button className="py-2 px-4 bg-blue-600 rounded-lg font-semibold text-white m-2" onClick={()=>{setState("red")}}>Red</button>
      <button className="py-2 px-4 bg-blue-600 rounded-lg font-semibold text-white m-2" onClick={()=>{setState("yellow")}}>Yellow</button>
      <button className="py-2 px-4 bg-blue-600 rounded-lg font-semibold text-white m-2" onClick={()=>{setState("green")}}>Green</button>
      <div style={{width:"200px", height:"200px", border:"1px solid black", backgroundColor:state}}></div>
    </div>
  )
}

export default UseStateTask8