import React, { useRef } from 'react'

const Task9 = () => {
    const inp = useRef();

  return (
    <div>
        <form action="" className='flex flex-col p-2'>
            <input type="text"
            className='border border-black rounded-md m-2'
            ref={inp}/>
            <button className='bg-red-600 text-white font-semibold py-1 px-3 rounded-md'
            onClick={()=>inp.current.value=""}>clear</button>
        </form>
    </div>
  )
}

export default Task9