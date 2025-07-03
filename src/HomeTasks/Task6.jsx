import React, { useState } from 'react'

const Task6 = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className='flex flex-col justify-center items-center'>
       <div>
         Name : <input 
        type="text"
        placeholder='username' 
        className='border border-black rounded-md p-2 m-2' 
        onChange={(e)=>setUsername(e.target.value)}/>
       </div>
       <div>
        Password : <input 
        type="password"
        placeholder='password' 
        className='border border-black rounded-md p-2 m-2' 
        onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button className='bg-green-600 text-white font-semibold py-2 px-3 rounded-md'
        onClick={()=>{
            username==="" || username === null ? alert("Enter valid username"):password==="" || password === null ? alert("Enter valid password"):alert("Form submitted succesfully");
        }}>Submit</button>
    </div>
  )
}

export default Task6