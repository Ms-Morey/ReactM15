import React, { useEffect, useState } from 'react'

const T19_Welcome = () => {
  const [welcome, setWelcome] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setWelcome(false)
    },1000)
  },[])
  return (
    <div>
      <h1>{welcome?"Welcome":""}</h1>
    </div>
  )
}

export default T19_Welcome