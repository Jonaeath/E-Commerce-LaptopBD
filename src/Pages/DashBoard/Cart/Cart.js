import React, { useEffect, useState } from "react";

const Cart = () => {
  const [orders, setOrders] = useState({});

  // This api use for load Order data
  useEffect(() => {
    fetch("http://localhost:4000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name & Address</th>
              <th>Products Name</th>
              <th>Quantity & TPrice</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr key={order._id}>
                <th>{i + 1}</th>
                <td>
                  {order.customerName}
                  <br />
                  <span>{order.address}</span>
                </td>
                <td>{order.ProductsName}</td>
                <td>
                  {order.quantity}
                  <br />
                  <span>${order.totalPrice}</span>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    // <div>
    //   {
    //       orders?.length > 0 &&
    //       orders?.map((order) => (
    //       <OrdersData key={order._id} order={order}></OrdersData>
    //     ))}
    // </div>
  );
};

export default Cart;
