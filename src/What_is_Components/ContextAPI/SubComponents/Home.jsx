import React, { useContext } from 'react'
import { context } from './Store'

const Home = () => {
  const data = useContext(context);
  return (
    <div>
    <h1>Username : {data.username}</h1>
    <h1>Password : {data.password}</h1>
    </div>
  )
}

export default Home