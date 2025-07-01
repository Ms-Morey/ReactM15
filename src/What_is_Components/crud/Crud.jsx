import React, { useState } from "react";

const Crud = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    id: Date.now(),
    list: [
      {
        isUpdating: false,
        username: "u1",
        password: "p1",
        id: Date.now() + 1,
      },
      {
        isUpdating: false,
        username: "u2",
        password: "p2",
        id: Date.now() + 2,
      },
      {
        isUpdating: false,
        username: "u3",
        password: "p3",
        id: Date.now() + 3,
      },
      {
        isUpdating: false,
        username: "u4",
        password: "p4",
        id: Date.now() + 4,
      },
    ],
    isUpdating: false,
  });


  let { username, password, list, id } = state;

  let handleChange = (e) => {
    let { name, value } = e.target
    setState({...state, [name]:value})
  }

  let handleSubmit = (e)=>{
    e.preventDefault()
    let tempObj = {
        isUpdating : false,
        username : state.username,
        password : state.password,
        id : id
    }

    setState({...state, isUpdating:false, list :[...state.list, tempObj]})
  }

  let handleDelete=(id)=>{
    let filteredList = state.list.filter((val)=>{
        return val.id!=id
    })
  }

  let handleUpdate = (id)=>{
    let obj = state.list.find((val)=>{
        return val.id == id
    })

    let filteredList = state.list.filter((val)=>{
        return val.id != id;
    })

    setState({isUpdating:true, username:obj.username, password:obj.password, id:obj.id, list:filteredList})
  }
  
  return (
    <div className="h-[100vh] w-full flex flex-col">
        <div className="flex bg-green-200 flex-col items-center justify-center h-[25vh] w-full">
        <form action="">
            <input type="text" onChange={handleChange} name="username" value={username} placeholder="username" className="border-gray-800 border-[1px] p-2 rounded-md m-2" />
            <input type="text" onChange={handleChange} name="password" value={password}  placeholder="password" className="border-gray-800 border-[1px] p-2 rounded-md m-2"/>
            <button onClick={handleSubmit} className="bg-green-600 py-2 px-2 text-white rounded-md font-semibold">{state.isUpdating?"Update":"Create"}</button>
        </form>
        </div>
        <div className="flex justify-center items-center flex-wrap h-[75vh] w-full">
            {
                state.list.length > 0 && state.list.map((user,i)=>{
                    return(
                        <div key={i} >
                            <div  className="bg-slate-200 shadow-md shadow-black m-3 p-2 h-40 w-40 flex flex-col justify-between">
                            <p>Username : {user.username}</p>
                            <p>Password : {user.password}</p>
                            <button className="bg-green-500 m-1 p-1 text-white font-semibold rounded-md" onClick={()=>{handleUpdate(user.id)}}>Update</button>
                            <button className="bg-red-500 m-1 p-1 text-white rounded-md" onClick={()=>{handleDelete(user.id)}}>Delete</button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
};

export default Crud;
