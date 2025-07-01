import React, { useState } from "react";

//Add a button that show/hides a paragraph
//Label the button as "Show Details" or "Hide Details" based on the state
const UseStateTask3 = () => {
  const [para, setPara] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      {para ? (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          possimus nostrum non tempora harum sunt inventore ducimus quam at
          cumque! Officia animi in cumque fugiat recusandae? Dolores
          exercitationem eum rem aliquid assumenda?{" "}
        </p>
      ) : (
        ""
      )}

      <button
        onClick={() => {
          setPara(!para);
        }}
        className="px-5 py-2 bg-green-600 rounded-lg font-semibold"
      >
        {para ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default UseStateTask3;
