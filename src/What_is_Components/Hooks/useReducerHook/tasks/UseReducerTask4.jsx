import React, { useReducer } from "react";

const UseReducerTask4 = () => {
  let initialVal = {
    item: { name: "", price: "", qty: "", id: Date.now() },
    cartItems: [
      { name: "Watch", price: "150", qty: "1", id: Date.now() + 1 },
      { name: "Mobile", price: "1500", qty: "5", id: Date.now() + 2 },
      { name: "Laptop", price: "50000", qty: "7", id: Date.now() + 3 },
    ],
    isUpdating: false,
  };

  let reducer = (state, action) => {
    switch (action.type) {
      case "create":
        return {
          ...state,
          item: { ...state.item, [action.payload.name]: action.payload.value },
        };

      case "add":
        return {
          ...state,
          cartItems: [...state.cartItems, state.item],
          item: { name: "", price: "", qty: "", id: Date.now() },
          isUpdating: false,
        };

      case "delete":
        return {
          ...state,
          cartItems: action.payload,
        };

      case "update":
        return {
          ...state,
          cartItems: action.payload.filteredCart,
          item: {
            name: action.payload.itemToUpdate.name,
            price: action.payload.itemToUpdate.price,
            qty: action.payload.itemToUpdate.qty,
          },
          isUpdating: true,
        };

      default:
        return state;
    }
  };

  let [state, dispatch] = useReducer(reducer, initialVal);
  let { name, price, qty } = state.item;

  let handleChange = (e) => {
    dispatch({ type: "create", payload: e.target });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add" });
    console.log(state);
  };

  let handleUpdate = (id) => {
    let filteredCart = state.cartItems.filter((val) => val.id !== id);
    let itemToUpdate = state.cartItems.find((val) => val.id === id);
    dispatch({ type: "update", payload: { filteredCart, itemToUpdate } });
  };

  let handleDelete = (id) => {
    let filteredCart = state.cartItems.filter((val) => val.id !== id);
    dispatch({ type: "delete", payload: filteredCart });
  };

  return (
    <div>
      <div className="flex justify-center">
        <form
          className="flex justify-center flex-col p-2 gap-1"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="price"
            value={price}
            name="price"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="qty"
            value={qty}
            name="qty"
            onChange={handleChange}
          />
          <button type="submit">
            {state.isUpdating ? "Update" : "Create"}
          </button>
        </form>
      </div>
      <div className="flex justify-center">
        <table className="w-[80%] border-[1px]">
          <thead>
            <tr className="border-[2px] bg-black text-white">
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {state.cartItems.length > 0 &&
              state.cartItems.map((val, i) => {
                return (
                  <tr key={val.id}>
                    <td>{val.name}</td>
                    <td>{val.price}</td>
                    <td>{val.qty}</td>
                    <td>
                      <button onClick={() => handleUpdate(val.id)}>
                        Click
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(val.id)}>
                        Click
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UseReducerTask4
