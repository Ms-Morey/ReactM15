import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../../../Loader'

const HOCTask2 = (Cbc1) => {
  return ()=>{
    const [state, setState] = useState(true)
    const [api, setApi] = useState([])

    useEffect(()=>{
        axios.get('https://api.github.com/users')
        .then((res)=>{
            setApi(res.data)
            setState(false)
        })
        .catch((err)=> console.log(err))
    },[])

    if(state){
        return <Loader/>
    }else{
        return <Cbc1/>
    }
  }
}

export default HOCTask2;