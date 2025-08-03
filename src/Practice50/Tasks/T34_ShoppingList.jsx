import React, { useState } from 'react';

const T34_ShoppingList = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState(['Milk', 'Palak', 'Salt', 'soap']);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = item.trim();
      setList([...list, trimmed]);
      setItem('');
    
  };

  // const removeItem = (i) => {
  //   setList(list.filter((item, index) => index !== i));
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Shopping List</h2>
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Add item..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </form>
        <ul className="space-y-2">
          {list.map((val, i) => (
            <li
              key={i}
              className="flex justify-between items-center p-2 bg-gray-50 rounded-md border"
            >
              <span>{val}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default T34_ShoppingList;
