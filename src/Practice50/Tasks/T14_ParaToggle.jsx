import React, { useState } from 'react'

const T14_ParaToggle = () => {
    const [isVisible, setIsVisible] = useState(true);
  return (
    <div className='flex items-center justify-center flex-col mt-5'>
        {isVisible?<p>This is the paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptatem distinctio. Placeat amet et consectetur quasi molestias, maiores facere culpa porro sequi animi voluptate, eos est aliquid. Ipsum facilis esse expedita, aperiam dicta delectus!</p>:""}
        <button onClick={()=>setIsVisible(!isVisible)} className='bg-blue-500 rounded-md py-2 px-3 font-semibold text-white'>{isVisible?"Hide":"Show"}</button>
    </div>
  )
}

export default T14_ParaToggle;