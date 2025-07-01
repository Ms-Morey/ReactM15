import React from 'react'

// Key Board event listner
// Detect when the used presses the spacebar or arrow keys
const EventTask4 = () => {

  return (
    <div>
        <input type="text"  className='bg-gray-400 rounded-lg border-s-black'
        onKeyDown={(e)=>{
          switch(e.key){
            case "ArrowUp" : console.log(e.key);
            break;
            case "Enter" : console.log(e.key);
            break;
            case "ArrowDown" : console.log(e.key);
            break;
            case "ArrowRight" : console.log(e.key);
            break;
            case "ArrowLeft" : console.log(e.key);
            break;
            case " " : console.log("Space");
            break;
          }
        }}/>
    </div>
  )
}

export default EventTask4;