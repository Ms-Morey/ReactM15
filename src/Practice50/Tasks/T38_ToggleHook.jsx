import React, { useState } from 'react';

const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial);
  return [value, () => setValue(v => !v)];
};

const T38_ToggleHook = () => {
  const [isVisible, toggle] = useToggle();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center flex flex-col gap-3">
        <h2 className="text-xl font-bold"> Toggle Hook </h2>
        <button
          onClick={toggle}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
        {isVisible && <p className="text-green-600">Toggle visible</p>}
      </div>
    </div>
  );
};

export default T38_ToggleHook;


