import axios from 'axios'
import React, { useEffect } from 'react'

const AxiosIntro = () => {
    useEffect(() => {
      axios.get('https://api.github.com/users')
      .then((res)=>console.log(res.data))
      .catch((err)=>console.log(err))
    }, [])
    
  return (
    <div>
        
    </div>
  )
}

export default AxiosIntro