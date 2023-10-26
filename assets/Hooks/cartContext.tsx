import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({
  cart: [],
  addItemToCart: (item: any) => {},
  removeItemFromCart: (item: any) => {},
  increment: (item: any) => {},
  decrement: (item: any) => {},
  totalitemprice: 0,
  itemprice: 0,
});

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalitemprice, setTotalItemPrice] = useState(0);
  const [itemprice, setItemPrice] = useState(0);
  const addItemToCart = (item: any) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      // If it's in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If it's not in the cart, add it with a quantity of 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (item: any) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const increment = (item: any) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const decrement = (item: any) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1 && cart[itemIndex].quantity > 1) {
      // If the item is in the cart and its quantity is greater than 1, decrement its quantity
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity -= 1;
      setCart(updatedCart);
    }
  };
  function calculateTotalPrice(item: any) {
    return item.quantity * item.price;
  }

  useEffect(() => {
    const itemSums: any = cart.map((item) => item.quantity * item.price);
    setItemPrice(itemSums);
    const totalItemPrice = cart.reduce((total, item) => {
      return total + calculateTotalPrice(item);
    }, 0);

    setTotalItemPrice(totalItemPrice);
  }, [cart]);
  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        increment,
        decrement,
        totalitemprice,
        itemprice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
