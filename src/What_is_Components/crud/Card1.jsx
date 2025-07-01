import React from "react";

const Card1 = ({ props }) => {
  console.log(props);
  return (
    <div className="bg-slate-200 rounded-md shadow-md m-2 shadow-slate-900 w-48 h-36 flex flex-col">
      <div className="h-14 w-full bg-yellow-200 rounded-md mb-2 flex items-center justify-center">
        <span className="rounded-full bg-lime-400 w-10 h-10 flex items-center justify-center">M</span>
      </div>
      <div className="pl-2">
        <p>Name : {props.name}</p>
        <p>Mobile : {props.mobile}</p>
        <p>City : {props.city}</p>
      </div>
    </div>
  );
};

export default Card1;
