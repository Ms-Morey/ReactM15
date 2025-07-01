import React, { useState } from 'react'
import "./useStateTask5.css"

const UseStateTask6 = () => {
    const [likeCount, setLikeCount] = useState(0);
  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    }}>
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"50px",
            width:"50px",
            borderRadius:"50%",
            border:"1px solid black"
        }} 
        onClick={()=>{
            setLikeCount(1);
        }}
        onDoubleClick={()=>{
            setLikeCount(0);
        }}
        className={likeCount?"liked":""}>{likeCount}</div>
    </div>
  )
}
export default UseStateTask6;