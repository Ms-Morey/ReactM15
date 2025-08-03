import React, { useState } from 'react';

const T24_TodoList = () => {
  const [todoList, settodoList] = useState([]);
  const [todo, settodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    settodoList([...todoList, { id: Date.now(), text: todo }]);
    settodo('');
  };

  const removeTodo = (id) => {
    settodoList(todoList.filter(todo => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-cente bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
        
        <form className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={todo}
              onChange={(e) => settodo(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>

        <div>
          {todoList.length === 0 ? (
            <div className="text-center py-8 text-gray-700">
              <p className="text-lg font-medium">No tasks</p>
              <p className="text-sm mt-1">Add task</p>
            </div>
          ) : (
            todoList.map(todo => (
              <div key={todo.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                <span className='font-semibold text-gray-400'>{todo.text}</span>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove todo
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default T24_TodoList;