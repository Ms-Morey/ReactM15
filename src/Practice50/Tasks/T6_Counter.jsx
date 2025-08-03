import React, { useState } from "react";

const T6_Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className=" pt-7 flex flex-col justify-center items-center">
      <div>
        <h1 className="font-bold text-xl ">{count}</h1>
      </div>
      <div className="flex gap-2 pt-3">
        <button
          className="bg-green-500 rounded-md px-3 py-2 font-semibold text-white"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className="bg-blue-500 rounded-md px-3 py-2 font-semibold text-white"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
        <button
          className="bg-red-500 rounded-md px-3 py-2 font-semibold text-white"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default T6_Counter;
