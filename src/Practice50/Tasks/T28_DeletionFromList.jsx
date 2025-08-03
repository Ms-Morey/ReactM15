import React, { useState } from 'react';

const T28_DeletionFromList = () => {
  const [items, setItems] = useState([
    'JavaScript',
    'Java',
    'Tailwind',
    'React',
    'SpringBoot'
  ]);

  const deleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Technologies</h2>
      <ul className="w-full max-w-md space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded shadow-sm"
          >
            <span className="text-gray-800 font-medium">{item}</span>
            <button
              onClick={() => deleteItem(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default T28_DeletionFromList;
