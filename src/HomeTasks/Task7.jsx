import React, { useState } from 'react'

const Task7 = () => {
    const [state, setState] = useState(true);
  return (
    <div className='flex items-center justify-center flex-col gap-2'>
        {state? <Profile/>: <MessageBoard/>}
        <button className='px-3 py-2 font-semibold text-white bg-pink-500 rounded-md'
        onClick={()=>setState(!state)}>{state?"Profile":"Board"}</button>
    </div>
  )
}

const Profile = ()=>{
    return(
        <div className='bg-slat-50 text-blue-700 font-thin text-xl flex flex-col p-4 rounded-md  shadow-sm shadow-black'>
            <p>Name : Mahesh Morey</p>
            <p>Age : 23</p>
            <p>City : Pune</p>
            <p>State : Maharashtra</p>
        </div>
    )
}

const MessageBoard = ()=>{
    return (
        <div className='bg-slate-50 text-black font-thin text-xl flex flex-col p-4 rounded-md shadow-sm shadow-black h-52 w-44'>
            <h1 className='text-xl font-bold text-slat-900'>Message Board</h1>
            <p className='text-red-700 text-sm font-thin'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A incidunt iste cumque! Tempore sunt voluptatibus mollitia, itaque aspernatur</p>
        </div>
    )
}

export default Task7