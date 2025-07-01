import React, { useState } from 'react'

//Take 3 buttons and chage them to the home , profile , settings
const UseStateTask9 = () => {
  const [state, setState] = useState("Home");
  return (
    <div className='flex flex-col'>
      <h1>{state}</h1>
      <button className="py-2 px-4 bg-blue-600 rounded-lg font-semibold text-white m-2" onClick={()=>{setState("Home")}}>Home</button>
      <button className="py-2 px-4 bg-blue-600 rounded-lg font-semibold text-white m-2" onClick={()=>{setState("Profile")}}>Profile</button>
      <button className="py-2 px-4 bg-blue-600 rounded-lg font-semibold text-white m-2" onClick={()=>{setState("Settings")}}>Setting</button>
    </div>
  )
}

export default UseStateTask9;