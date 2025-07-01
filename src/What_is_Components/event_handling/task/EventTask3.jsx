import React, { useState } from 'react'
import { FcOrganization } from "react-icons/fc";

//clic outside adn 
const EventTask3 = () => {

    const [state, setState] = useState(false);
    let {body} = document;
    
    body.addEventListener('click',()=>{setState(false)})

  return (
    <div>
        <h1>This is Heading</h1>
        <div onClick={(e)=>{
             setState(!state)
             e.stopPropagation() // used to stop propogation of event to it's parent
            }}
             ><FcOrganization className='h-16 w-auto'/></div>
        <div className={`w-28 h-28 bg-red-500 ${state?"block":"hidden"}`}></div>
    </div>
  )
}

export default EventTask3;


// Bubling
// Capturing
// Event Delegation
// Event Propogation