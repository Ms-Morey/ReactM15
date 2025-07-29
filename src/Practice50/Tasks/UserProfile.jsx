import React from "react";

const UserProfile = ({ user }) => {
  console.log(user);
  const { name, age, loc } = user;
  return (
    <div className="p-3">
      <div className="bg-white h-44 w-36 rounded-md shadow-md shadow-black flex flex-col gap-2">
        <div className="h-[35%] w-full"></div>
        <div className="pl-3 flex gap-2 flex-col">
          <p>Name: {name}</p>
          <p>Age : {age}</p>
          <p>Location : {loc}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
