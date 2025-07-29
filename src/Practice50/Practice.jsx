import React, { useState } from 'react'
import WelcomeComp_1 from './Tasks/WelcomeComp_1'
import UserProfile from './Tasks/UserProfile'
import { hobbies , movies } from './Data'
import HobbiesT3 from './Tasks/HobbiesT3'
import DefaultColorT4 from './Tasks/DefaultColorT4'
import MoviesT5 from './Tasks/MoviesT5'

const Practice = () => {
    const [state, setState] = useState({username:"", age:"", list:[]})
    let {username, age} = state
   let  handleChange =(e)=>{
        const {name, value} = e.target;
        setState((prev)=>{return {...prev,[name]:value}})
    }
    let rang = "blue"

  return (
    <div className='h-screen w-full bg-slate-200 flex flex-col'>
        {/* <div className='flex justify-center'>
            <form action="" className='flex flex-col justify-center items-center'>
                <input type="text" onChange={handleChange} name='username' value={username} className='border rounded-md p-2 m-2' placeholder='username' />
                <input type="text" onChange={handleChange} name='age' value={age} className='border rounded-md p-2 m-2' placeholder='age'/>
                <button onClick={(e)=>{
                    e.preventDefault()
                    setState({...state, list:[{username:state.username, age:state.age}]})
                }} className='bg-green-500 font-semibold rounded-md px-5 py-2 text-white'>Submit</button>
            </form>
        </div> */}

       <div>
         {/* Task 1 */}
        {/* <WelcomeComp_1 user={"Akshada"}/> */}

        {/* Task 2 */}
        {/* <UserProfile user={{name:"Mahesh",age:23, loc:"Pune"}}/> */}

        {/* Task 3 */}
        {/* <HobbiesT3 hobbies={hobbies}/> */}

        {/* Task4  */}
        {/* <DefaultColorT4 color={rang}/> */}

        {/* Task5  */}
        {/* <MoviesT5 movies={movies}/> */}

        

       </div>
    </div>
  )
}

export default Practice