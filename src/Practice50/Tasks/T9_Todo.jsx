import React, { useState } from 'react'

const T9_Todo = () => {
    const [todo, setTodo] = useState({task:"", list:["Make a cake"]})

    const handleChange = (e)=>{
        setTodo({...todo, task:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setTodo({...todo, list:[...todo.list, todo.task]})
    }
  return (
    <div className='flex justify-center items-center flex-col'>
        <form action="" className='flex flex-col gap-2'>
            <input onChange={handleChange}type="text" placeholder='add todo' className='border rounded-md pl-3 p-1 border-black mt-3' />
            <button className='bg-blue-500 rounded-md px-3 py-1 font-semibold text-white' onClick={handleSubmit}>submit</button>
        </form>
        <ul className='list-disc font-medium'>
            {todo.list.map((val,i)=>{
            return (<li key={i}>{val}</li>)
            })}
        </ul>
    </div>
  )
}

export default T9_Todo