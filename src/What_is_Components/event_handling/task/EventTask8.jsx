import React, { useRef, useState } from "react";
import { DiVim } from "react-icons/di";
import { FaParachuteBox } from "react-icons/fa6";

const EventTask8 = () => {
    const [state, setState] = useState({
        x : 0,
        y : 0
    });


  const myDivId = useRef();
  return (
    <div contentEditable="true" 
            onKeyDown={(e)=>{
            switch(e.key){
                case "ArrowUp":{
                    setState((prev)=>{return {...prev, y: prev.y-=10}})
                    myDivId.current.style.transform = `translate(${state.x}px , ${state.y}px)`
                    break;
                }
                    
                case "ArrowDown":{
                    setState((prev)=>{return {...prev, y: prev.y+=10}})
                    myDivId.current.style.transform = `translate(${state.x}px , ${state.y}px)`
                    break;
                }
                    
                case "ArrowRight":{
                    setState((prev)=>{return {...prev, x: prev.x+=10}})
                    myDivId.current.style.transform = `translate(${state.x}px , ${state.y}px)`
                    break;
                }
                    
                case "ArrowLeft":{
                    setState((prev)=>{return {...prev, x: prev.x-=10}})
                    myDivId.current.style.transform = `translate(${state.x}px , ${state.y}px)`
                    break;
                }
                   
            }
        }}

        className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div ref={myDivId}>
        <FaParachuteBox fontSize="70px" color="brown" />
      </div>
    </div>
  );
};

export default EventTask8;
