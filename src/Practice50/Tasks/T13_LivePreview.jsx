import React, { useState } from "react";

const T13_LivePreview = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter data..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>Preview: {text}</p>
    </div>
  );
};

export default T13_LivePreview;
