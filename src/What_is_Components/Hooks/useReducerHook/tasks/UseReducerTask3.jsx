import React, { useReducer } from 'react';

const UseReducerTask3 = () => {
  const initialVal = {
    item: {
      id: Date.now(),
      name: '',
      price: '',
      qty: '',
    },
    cartItem: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return {
          ...state,
          item: {
            ...state.item,
            [action.payload.name]: action.payload.value,
          },
        };

      case 'create':
        return {
          ...state,
          cartItem: [...state.cartItem, state.item],
          item: {
            id: Date.now(),
            name: '',
            price: '',
            qty: '',
          },
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialVal);
  const { name, price, qty } = state.item;

  const handleChange = (e) => {
    dispatch({
      type: 'add',
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'create' });
    // console.log('Cart Items:', state.cartItem);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={handleChange}
          className="border border-black rounded-md p-2 m-2"
        />
        <input
          type="text"
          name="price"
          value={price}
          placeholder="price"
          onChange={handleChange}
          className="border border-black rounded-md p-2 m-2"
        />
        <input
          type="text"
          name="qty"
          value={qty}
          placeholder="qty"
          onChange={handleChange}
          className="border border-black rounded-md p-2 m-2"
        />
        <button
          type="submit"
          className="rounded-md bg-green-300 text-white font-semibold px-3 py-2"
        >
          Create
        </button>
      </form>

      <div className="mt-5 flex flex-wrap justify-start">
        {/* <h2 className="text-lg font-bold text-center">Cart Items</h2> */}
          {state.cartItem.map((item) => (
            <div key={item.id} className='flex flex-col items-center justify-center bg-slate-200 blur-0 shadow-sm shadow-black p-8 gap-2 rounded-md m-2'>
             <p>Name : {item.name}</p>
             <p>Price : ₹{item.price}</p>
             <p>Qty : {item.qty}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UseReducerTask3;
