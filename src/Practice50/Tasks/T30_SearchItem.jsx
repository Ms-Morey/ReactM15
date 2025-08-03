import React, { useState } from "react";

const T30_SearchItem = () => {
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Grape",
    "Kiwi",
    'Avacado'
  ]);
  const [search, setsearch] = useState("");

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Search List</h2>

        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search items"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {filtered.length > 0 ? (
          <ul className="flex gap-1 flex-col">
            {filtered.map((item, i) => (
              <li key={i} className="p-3 bg-gray-100 rounded border">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No items</p>
        )}
      </div>
    </div>
  );
};

export default T30_SearchItem;
