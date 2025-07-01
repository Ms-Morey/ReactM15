import React, { useState } from "react";

//

const EventTask7 = () => {
  const [items, setItems] = useState([
    "Text1",
    "Text2",
    "Text3",
    "Text5",
    "Text6",
  ]);

  return (
    <div>
      <ol>
        {items.map((item, i) => {
            let copy = [...items]
            let s = "";
          return (
            <li key={i}
             draggable="true"

             onDragStartCapture={(e)=>{
              s = copy.indexOf(e.target.innerHTML);
             }}
            
             onDragOverCapture={(e)=>{
                // console.log(copy);
                // console.log(e.target.innerHTML);
                let t = copy.indexOf(e.target.innerHTML);
                let temp = copy[s]
                console.log(temp);
                copy[s] = copy[t]
                console.log(copy[s]);
                copy[t] = temp;
                console.log(copy[t]);
                setItems(copy);
             }}>
            {item}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default EventTask7;
