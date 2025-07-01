import React, { useEffect, useRef } from "react";

const UserRefTask1 = () => {
  const inputRef = useRef();
  
  return (
    <div>
      <form action="">
        <input type="text" ref={inputRef} className="border-gray-900 m-3 p-2 border-[1px] rounded-md" placeholder="username" autoFocus="true"/>
        <p onClick={()=>{
          inputRef.current.style.background= "red"
        }}>Click</p>
      </form>
    </div>
  );
};

export default UserRefTask1;

// What is useRef() hook ?
// useRef hook in react that provides the way to strore mutable values/reference that doesn't trigger re-renders
// when it changes.
// It also commonly used to access dom elements directly
// let ref = useRef();
//It returns ref object with ref.current property that can hold
// 1. DOM element reference
// 2. Mutable value that can change across the renders

// Uncontrolled component
// useref() hook converts your controlled components into undcontrolled component, because instead of interacting with
// virtual dom it directly interacts with the real dom

// Aspect                         useRef in Uncontrolled Component
// Usage                          Acces DOM directly (eg.form input)
// Pros                           Simple , fast , no re-render overhead
// Cons                           Non - reactive , harder to track, less declarative
// Best use case                  Small forms, focus handling , timers, stroing previous state
