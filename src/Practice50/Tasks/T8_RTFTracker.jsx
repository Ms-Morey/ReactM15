import React, { useState } from 'react'

const T8_RTFTracker = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div className='flex justify-center items-center flex-col'>
        <div className='flex flex-col font-semibold text-l'>
            <span>Name : {name}</span>
            <span>Password : {password}</span>
        </div>
        <form action="" className='flex flex-col gap-2 mt-3'>
            <input type="text" placeholder='username' className='rounded-md border pl-2 border-black' onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" placeholder='password' className='rounded-md border pl-2 border-black' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className='bg-blue-400 rounded-md px-3 py-1 font-semibold text-white' 
            onClick={(e)=>{
                e.preventDefault()
                // setName("")
                // setPassword("")
            } 
            }>submit</button>
        </form>
    </div>
  )
}

export default T8_RTFTracker