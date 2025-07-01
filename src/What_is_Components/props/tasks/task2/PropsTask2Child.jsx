import React from 'react'

const PropsTask2Child = (props) => {
  console.log(props);
  // let {props : x} = props;
  // console.log(x);
  // let {state , setState} = x;

  let{props: {state , setState}} = props;


  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
      <h1>{state}</h1>
      <button className='bg-cyan-900 rounded-lg py-2 px-3 text-white font-semibold' 
      onClick={()=>{
        setState(state+1)
      }}
      >Increment</button>

<button className='bg-blue-600 rounded-lg py-2 px-3 text-white font-semibold' 
      onClick={()=>{
        setState(state-1)
      }}
      >Decrement</button>
        <button className='bg-red-600 rounded-lg py-2 px-3 text-white font-semibold' 
      onClick={()=>{
        setState(0)
      }}
      >Reset</button>
      
    </div>
  )
}

export default PropsTask2Child;