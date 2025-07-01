import React from 'react'

const UsetStateTask2 = () => {
    let count = 0;
  return (
    <div>
        <h1>{count}</h1>
        <button  className="rounded-md border-black bg-green-800 px-3 py-2" 
        onClick={()=>{
            count+1;
        }}>add</button>
    </div>
  )
}

export default UsetStateTask2;