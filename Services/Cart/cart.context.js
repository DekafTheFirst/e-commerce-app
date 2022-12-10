import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const taxRate = 20;

  let cartTotal = 0;
  if (cartItems.length > 0) {
    cartItems.forEach((item) => {
      const itemPricePlusTax = item.price + item.price / taxRate;
      cartTotal += itemPricePlusTax * item.qty;
    });
  }

  let numOfCartItems = 0;
  if (cartItems.length > 0) {
    cartItems.map((item) => {
      numOfCartItems += item.qty;
    });
  } else {
    numOfCartItems = 0;
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        setOrders,
        deliveryAddress,
        setDeliveryAddress,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContextProvider, OrderContext };
