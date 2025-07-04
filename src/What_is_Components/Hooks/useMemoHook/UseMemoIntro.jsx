import React, { useMemo, useState } from "react";

const UseMemoIntro = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  let checkCount1 = ()=>{
    if(count1%2 === 0){
        return "EVEN"
    }else{
        return "ODD"
    }
  }

  let checkCount2 = useMemo(()=>{
    let i = 1000000000;
    while(i>0){
        i--;
    }
    if(count2%2 === 0){
        return "EVEN"
    }else{
        return "ODD"
    }
  },[count2])

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <button
        className="bg-gray-700 text-white font-semibold rounded-md py-1 px-3 m-4"
        onClick={() => setCount1(count1 + 1)}
      >
        {count1}
      </button>
      <span className="bg-slate-600 text-white font-semibold py-1 px-4 " >{checkCount1()}</span>
      </div>
      <div>
      <button
        className="bg-gray-700 text-white font-semibold rounded-md py-1 px-3 m-4"
        onClick={() => setCount2(count2 + 1)}
      >
        {count2}
      </button>
      <span className="bg-slate-600 text-white font-semibold py-1 px-4 ">{checkCount2}</span>
      </div>
    </div>
  );
};

export default UseMemoIntro;
