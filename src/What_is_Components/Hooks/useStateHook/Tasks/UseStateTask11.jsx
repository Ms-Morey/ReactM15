import React, { useState } from "react";

// Display a list of random items.
// create a list of random items and create a remove button for each item.
// Include an "Add random Item" button
// USe only use State

const UseStateTask11 = () => {
  const [items, setitems] = useState([]);

  const [count, setCount] = useState(1);
  return (
    <>
      {items.map((val, i) => {
        return (
          <>
            <div key={i}>
              <h1 key={i}>{val}</h1>
              <button
                // onClick={()=>{
                //     setitems(items.filter((val, ind)=>{
                //         return ind !== i;
                //     }))
                // }}

                // {/* Using splice Method */}
                onClick={() => {
                  let x = items.splice(i, 1);
                  setitems([...items]);
                }}
                className="bg-blue-500 rounded-md"
              >
                Remove
              </button>
            </div>
          </>
        );
      })}
      <button
        onClick={() => {
          items.push(`item${count}`);
          setCount(count + 1);
        }}
        className="bg-green-500 m-2 rounded-lg py-2 px-3 hover:scale-110"
      >
        Add Random Item
      </button>
    </>
  );
};

export default UseStateTask11;
