import React, { useState } from 'react';

const T7_Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    // setIsDark(isOn);
  };

  return (
    <div className={`flex items-center gap-4 p-4 ${isOn?"bg-slate-900 text-white font-semibold":"bg-slate-200 text-black font-semibold"}`}>
      <button
        onClick={toggleSwitch}
        className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
          isOn ? 'bg-gray-400' : 'bg-green-500'
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? 'translate-x-6' : ''
          }`}
        />
      </button>
      <span className="text-lg font-medium">{isOn ? 'Dark' : 'Light'}</span>
    </div>
  );
};

export default T7_Toggle;
