import React, { useState } from 'react'
import "./useStateTask5.css"

//Toggle between light and dark modes using a button.

const UseStateTask5 = () => {
    const [isDark, setIsDark] = useState(false);
  return (
    <div id="mainBodyDarkLightMode" className={isDark?"dark":"light"}>
        UseStateTask5
        <button className={isDark?"px-3 py-2 rounded-md border-none bg-blue-700":"px-3 py-2 rounded-md border-none bg-green-700"}
        onClick={()=>{
            setIsDark(!isDark);
        }}>{isDark?"Light":"Dark"}</button>
    </div>
  )
}

export default UseStateTask5