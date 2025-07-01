import { useState } from "react";

const UseStateTask4 = () => {
  const [state, changeState]= useState(0);
  return (
    <div className="flex items-center justify-center flex-col">
     <h1>{state}</h1>
     <button onClick={()=>{changeState(state+1)}}>Add</button>
     <button onClick={()=>{changeState(state-1)}}>Sub</button>
     <button onClick={()=>{changeState(0)}}>Reset</button>
    </div>
  );
};

export default UseStateTask4;
