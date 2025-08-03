import React, { createContext, useContext, useReducer } from 'react';

// Cart Context
const CartContext = createContext();

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    default:
      return state;
  }
};

// Cart Provider
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
  };

  const getTotalItems = () => {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addItem, 
      removeItem, 
      updateQuantity, 
      getTotalItems, 
      getTotalPrice 
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Product List Component
const ProductList = () => {
  const { addItem } = useCart();
  
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 50 },
    { id: 4, name: 'Monitor', price: 300 }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product.id} className="p-4 border border-gray-200 rounded-md">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-green-600 font-bold">${product.price}</p>
            <button
              onClick={() => addItem(product)}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Cart Component
const Cart = () => {
  const { cart, removeItem, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart ({getTotalItems()} items)</h2>
      
      {cart.items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div className="space-y-3">
          {cart.items.map(item => (
            <div key={item.id} className="flex justify-between items-center p-3 bg-white rounded-md border">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-green-600">${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="p-3 bg-white rounded-md border">
            <p className="text-lg font-bold">Total: ${getTotalPrice()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const T46_GlobalShoppingCartWithContextAPI = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto max-w-4xl mt-8">
          <h1 className="text-3xl font-bold text-center mb-8">Global Shopping Cart</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md">
              <ProductList />
            </div>
            
            <div className="bg-white rounded-lg shadow-md">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default T46_GlobalShoppingCartWithContextAPI; 