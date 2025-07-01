import React from "react";
import UseStateIntro from "./useStateHook/UseStateIntro";
import UserRefIntro from "./userRefHook/UserRefIntro";

const HooksIntro = () => {
  return (
    <>
      {/* <div>
        <UseStateIntro />
      </div> */}

      <div>
        <UserRefIntro />
      </div>
    </>
  );
};

export default HooksIntro;

//Hooks are special functions in react that let you use features like state and lifecycle in functional components
// (which are jus normal javascript functions)

// What is State ?
// State is a way to store a data that can change over time in a component.
// eg. counter (that will increase or decrease when button in clicked)
// if we do any change in a state whole component will be re-rendered.

//
