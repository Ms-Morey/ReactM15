import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  let navigate = useNavigate();
  let un = "msmorey";
  let ps = "123456";

  let handleClick = (e) => {
    e.preventDefault();
    if (un == username && ps == pass) {
      navigate("/home");
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center mt-4">
      <input
        className="border-[2px] rounded-sm"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border-[2px] rounded-sm"
        type="text"
        onChange={(e) => setPass(e.target.value)}
      />
      <button className="bg-slate-600 text-white rounded-md font-semibold px-3"
      onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
