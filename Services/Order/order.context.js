import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [paid, setPaid] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    console.log(orders);
  }, [orders]);
  return (
    <OrderContext.Provider
      value={{
        paid,
        setPaid,
        orders,
        setOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContextProvider, OrderContext };
