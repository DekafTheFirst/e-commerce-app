import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {}, [orders]);
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
