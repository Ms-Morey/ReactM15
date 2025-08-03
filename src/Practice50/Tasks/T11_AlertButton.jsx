import React from "react";

const T11_AlertButton = () => {
  const showAlert = () => {
    alert("You hava cliked allert button!");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4 gap-3">
      <h3>press below button</h3>
      <button className="rounded-md bg-red-400 text-white font-semibold px-3 py-2" onClick={showAlert}>press me</button>
    </div>
  );
};

export default T11_AlertButton;
