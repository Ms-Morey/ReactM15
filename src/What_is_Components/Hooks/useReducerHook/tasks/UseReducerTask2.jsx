import React, { useReducer, useState } from 'react'

const UseReducerTask2 = () => {
    let initailValue ={
        cartItems: [
            {id: 1, name: 'Item 1', price: 50, qty:3},
        ]
    }

    let [product, setProduct]=useState({id:Date.now(), name:'', price:null, qty:null})

    let [state, dispatch] = useReducer((state, action)=>{
        switch(action.type){
            case 'add':return {...state, cartItems:[...state.cartItems, action.payload]}
            break;
            default: return state
            break;
        }
    }, initailValue)

  return (
    <div>
         <div className='flex justify-center items-center'>
            <form className='flex flex-col justify-center items-center gap-2'>
                <input type="text" className='p-2 border rounded-md border-black'placeholder='name' onChange={(e)=>setProduct({...product, name: e.target.value})} />
                <input type="text" className='p-2 border rounded-md border-black'placeholder='price' onChange={(e)=>setProduct({...product, price: e.target.value})} />
                <input type="text" className='p-2 border rounded-md border-black'placeholder='qty' onChange={(e)=>setProduct({...product, qty: e.target.value})} />
                <button onClick={(e)=>{
                    e.preventDefault()
                    dispatch({type:'add', payload:product})}}
                className='bg-green-400 rounded-md px-3 py-2 text-white font-semibold'>Add</button>
            </form>
            
         </div>
         <div className='flex gap-2 flex-wrap'>
            {state.cartItems.map((val, i)=>{
                return(
                    <div key={i} className='bg-slate-300 p-2'>
                        <p>Id: {val.id}</p>
                        <p>Name : {val.name}</p>
                        <p>Price : {val.price}</p>
                        <p>qty : {val.qty}</p>
                        
                    </div>
                )
            })}
         </div>
    </div>
  )
}

export default UseReducerTask2