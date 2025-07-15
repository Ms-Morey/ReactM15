import React, { useReducer, useState } from 'react'

const UseReducerTask1 = () => {
    let reducer = (state, action)=>{
        console.log(state, action)
        switch(action.type){
            case "inc":return state+=action.payload;
            break;
            case "dec": return state-=action.payload;
            break;
            case "reset": return state=0;
            break;

            default: return state;
                break;
        }
    }

    const [state, setState] = useReducer(reducer, 0)

         
  return (
    <div className='flex items-center justify-center flex-col'>
        <p className='bg-fuchsia-300 font-bold m-6 px-10 py-3 rounded-md'>{state}</p>
        <button className='bg-blue-500 text-xl font-semibold text-white px-3 py-2 m-3 rounded-md' onClick={()=>{setState({type:"inc", payload:100})}}>Prod 1</button>
        <button className='bg-red-500 text-xl font-semibold text-white px-3 py-2 m-3 rounded-md' onClick={()=>{setState({type:"dec", payload:150})}}>Prod 2</button>

    </div>
  )
}

export default UseReducerTask1;