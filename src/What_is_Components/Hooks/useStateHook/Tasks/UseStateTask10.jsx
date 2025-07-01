import React, { useState } from 'react'
//Generate a 4 digit random otp generator
const UseStateTask10 = () => {
    const [no, setNo] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center">
        <h1>{no}</h1>
        <button className="py-2 px-3 rounded-md bg-green-500 font-semibold text-white" onClick={()=>{setNo(Math.ceil(Math.random()*10000))}}>Generate</button>
    </div>
  )
}

export default UseStateTask10;