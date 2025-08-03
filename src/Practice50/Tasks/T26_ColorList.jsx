import React from 'react';
import { colors } from '../Data';

const T26_ColorList = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Color List</h1>

        <ul>
          {colors.map((color, index) => (
            <li 
              key={index} 
              className={`text-lg font-semibold`}
              style={{ color: color.toLowerCase() }}
            >
              {color}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default T26_ColorList;
