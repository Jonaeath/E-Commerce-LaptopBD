import React, { useEffect, useState } from "react";
import OrdersData from "./OrdersData";

const Cart = () => {
  const [orders, setOrders] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {
          orders?.length > 0 &&
          orders?.map((order) => (
          <OrdersData key={order._id} order={order}></OrdersData>
        ))}
    </div>
  );
};

export default Cart;
