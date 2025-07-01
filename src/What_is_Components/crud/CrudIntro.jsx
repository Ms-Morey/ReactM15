import React, { useState } from "react";
import Card1 from "./Card1";

const CrudIntro = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, { username: user, password: pass , city : 'pune'}]);
  };

  console.log(list);
  return (
    <div>
      <div className="h-[25vh] w-full bg-green-300 flex justify-center items-center ">
        <form action="" className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Username"
            className="w-64 px-2 py-1 border border-gray-700 rounded-md shadow-sm "
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Password"
            className="w-64 px-2 py-1 border border-gray-700 rounded-md shadow-sm"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />

          <button
            className="bg-blue-700 text-white font-semibold rounded-lg py-1 px-2"
            onClick={handleSubmit}
          >
            Signup
          </button>
        </form>
      </div>
      <hr />

      <div className="h-full w-full flex items-center flex-wrap justify-center bg-slate-600">
        {list.map((val, i) => {
          return (
            // <div key={i} className="h-32 w-52 shadow-xl bg-slate-100 m-2 rounded-md pl-3 border-yellow-400 border-solid">
            //   <p>Username : {val.username}</p>
            //   <p>Password : {val.password}</p>
            // </div>
            <Card1 props = {{name:val.username, mobile:val.password, city:val.city}} key={i}/>
          );
        })}
      </div>
    </div>
  );
};

export default CrudIntro;

//synthetic event is an object which will give the entire information about the current event and current element (target)
