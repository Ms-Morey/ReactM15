import React, { useState } from "react";

const T12_ConsoleForm = () => {
  const [data, setData] = useState({ name: "", email: "" });
  const {name, email} = data;

  const handleChange = (e) => {
    setData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", data);
    setData({ name: "", email: ""})
  };

  return (
    <div>
      <form className="flex flex-col justify-center items-center gap-2 mt-6" onSubmit={handleSubmit}>
        <input className="border border-black pl-2 rounded-md" name="name" value={name} placeholder="Name" onChange={handleChange} />
        <input className="border border-black pl-2 rounded-md" name="email" value={email} placeholder="Email" onChange={handleChange} />
        <button className="rounded-md bg-blue-500 text-white font-semibold px-3 py-2" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default T12_ConsoleForm;
