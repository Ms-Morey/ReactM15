import React, { useState } from "react";
import MemoizationIntroChild from "./MemoizationIntroChild";
import MemoizationIntroChild2 from "./MemoizationIntroChild2";

const MemoizationIntro = () => {
  const [count, setCount] = useState(0);
  return (
    <div className=" felx flex-col items-center justify-center">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-amber-500 text-white font-semibold py-1 px-3 m-2 rounded-md"
      >
        count : {count}
      </button>
      <hr />
      <MemoizationIntroChild />
      <hr />
      <MemoizationIntroChild2/>
    </div>
  );
};

export default MemoizationIntro;
