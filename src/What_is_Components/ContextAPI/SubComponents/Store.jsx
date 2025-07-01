import React, { createContext } from 'react'
export let context = createContext();

const Store = ({children}) => {
    let username = "Mahesh";
    let password = 1293393;
  return (
    <div>
      <context.Provider value={{username, password}}>
        {children}
      </context.Provider>
    </div>
  )
}

export default Store