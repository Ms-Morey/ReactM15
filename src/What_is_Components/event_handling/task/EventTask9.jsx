import React, { useState } from 'react'

function EventTask9() {
    const [state, setState] = useState(["Item1","Item2", "Item3", "Item4","Item5"]);
  return (
    <div>
        <ol>
        {state.map((item, index)=>{
            return(
                <li key={index}
                    onMouseEnter={(e)=>{
                        e.target.style.backgroundColor = "yellow";
                    }}
                    onMouseLeave={(e)=>{
                        e.target.style.backgroundColor = "";
                    }}
                >{item}</li>
            )
        })}
        </ol>
    </div>
  )
}

export default EventTask9;