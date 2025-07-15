import React, { useReducer, useState } from 'react';

const UseReducerTask2 = () => {
  let initialValue = {
    cartItems: [
      { id: 1, name: 'Item 1', price: 50, qty: 3 },
    ],
  };

  let reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return { ...state, cartItems: [...state.cartItems, action.payload] };

      case 'delete':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };

      case 'update':
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ? action.payload : item
          ),
        };

      default:
        return state;
    }
  };

  const [product, setProduct] = useState({ id: '', name: '', price: '', qty: '' });
  const [isUpdating, setIsUpdating] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialValue);

  const { name, price, qty } = product;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!name || !price || !qty) return;

    if (isUpdating) {
      dispatch({ type: 'update', payload: product });
      setIsUpdating(false);
    } else {
      dispatch({
        type: 'add',
        payload: { ...product, id: Date.now() },
      });
    }

    setProduct({ id: '', name: '', price: '', qty: '' });
  };

  const handleEdit = (item) => {
    setProduct(item);
    setIsUpdating(true);
  };

  return (
    <div>
      <div className='flex justify-center items-center m-3'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-center items-center gap-2'
        >
          <input
            type='text'
            value={name}
            name='name'
            className='p-2 border rounded-md border-black'
            placeholder='name'
            onChange={handleChange}
          />
          <input
            type='text'
            value={price}
            name='price'
            className='p-2 border rounded-md border-black'
            placeholder='price'
            onChange={handleChange}
          />
          <input
            type='text'
            value={qty}
            name='qty'
            className='p-2 border rounded-md border-black'
            placeholder='qty'
            onChange={handleChange}
          />
          <button
            type='submit'
            className={`${
              isUpdating ? 'bg-yellow-500' : 'bg-green-400'
            } rounded-md px-3 py-2 text-white font-semibold`}
          >
            {isUpdating ? 'Update' : 'Add'}
          </button>
        </form>
      </div>

      <div className='flex gap-2 flex-wrap p-2 justify-items-start'>
        {state.cartItems.map((val) => (
          <div key={val.id} className='bg-slate-300 p-3 flex flex-col'>
            <p>Id: {val.id}</p>
            <p>Name : {val.name}</p>
            <p>Price : {val.price}</p>
            <p>qty : {val.qty}</p>
            <div className='flex gap-2 mt-2'>
              <button
                className='bg-green-400 text-white font-semibold rounded-sm px-2 py-1'
                onClick={() => handleEdit(val)}
              >
                Update
              </button>
              <button
                className='bg-red-400 text-white font-semibold rounded-sm px-2 py-1'
                onClick={() => dispatch({ type: 'delete', payload: val.id })}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseReducerTask2;
