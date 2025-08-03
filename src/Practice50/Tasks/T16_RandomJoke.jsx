import axios from 'axios';
import React, { useEffect, useState } from 'react'

const T16_RandomJoke = () => {
    const [joke, setJoke] = useState({});

    useEffect(()=>{
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((res)=>{
            // console.log(res.data)
            setJoke(res.data)
        }).catch(err=>console.log(err))
    },[])

  return (
    <div>{joke.setup},<br />{joke.punchline}</div>
  )
}

export default T16_RandomJoke